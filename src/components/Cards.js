import '../styles/Cards.css';

import StatusScreen from './StatusScreen.js';

import { useState } from 'react';
import {
  generateNineRandomCards,
  generateRandomCardsBasedOnSelectedCards,
} from '../scripts/randomCards.js';

const Card = ({ pokeData, onClick }) => {
  return (
    <div className="card-container">
      <div className="card" onClick={onClick}>
        <img className="card-image" src={pokeData.image} alt={pokeData.name} />

        <p className="card-text">{pokeData.name}</p>
      </div>
    </div>
  );
};

const Cards = ({ data, score, bestScore, setScore, setBestScore }) => {
  const nineRandomCards = generateNineRandomCards(data);

  const [selectedCards, setSelectedCards] = useState([]);
  const [cards, setCards] = useState(nineRandomCards);
  const [status, setStatus] = useState('playing');

  const checkSelectedCards = (id) => {
    const hasSelectedCard = selectedCards.filter((card) => card.id === id);
    if (hasSelectedCard.length > 0) return true;
    return false;
  };

  const compareDataAndSelectedCards = (latestSelectedCards) => {
    if (data.length === latestSelectedCards.length) {
      return true;
    }
    return false;
  };

  const updateBestScore = (latestScore) => {
    if (latestScore > bestScore) {
      setBestScore(latestScore);
    }
  };

  const getCardsById = (id) => {
    const latestCard = cards.filter((card) => card.id === id)[0];
    return latestCard;
  };

  const handleClick = (id) => {
    return () => {
      const hasLost = checkSelectedCards(id);
      if (hasLost) return setStatus('lost');

      const card = getCardsById(id);
      const latestSelectedCards = [...selectedCards, card];
      const hasWon = compareDataAndSelectedCards(latestSelectedCards);

      if (hasWon) return setStatus('won');

      const randomCards = generateRandomCardsBasedOnSelectedCards(
        data,
        latestSelectedCards
      );
      const latestScore = score + 1;
      setSelectedCards(latestSelectedCards);
      setCards(randomCards);
      setScore(latestScore);
      updateBestScore(latestScore);
    };
  };

  const reset = () => {
    setSelectedCards([]);
    setCards(nineRandomCards);
    setScore(0);
    setStatus('playing');
  };

  return (
    <>
      {status === 'playing' && (
        <div className="cards">
          {cards.map((pokeObject) => (
            <Card
              key={pokeObject.id}
              pokeData={pokeObject}
              onClick={handleClick(pokeObject.id)}
            />
          ))}
        </div>
      )}

      {(status === 'won' || status === 'lost') && (
        <StatusScreen status={status} onReset={reset} />
      )}
    </>
  );
};

export default Cards;
