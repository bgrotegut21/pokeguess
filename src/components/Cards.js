import { useState } from 'react';
import { getNineRandomCards } from '../scripts/utils.js';

const Card = ({ pokeData }) => {
  return (
    <div className="card">
      <img src={pokeData.image} alt={pokeData.name} />
      <p>{pokeData.name}</p>
    </div>
  );
};

const Cards = ({ data }) => {
  const nineRandomCards = getNineRandomCards(data);
  console.log(nineRandomCards, 'the nine random cards');

  const [slectedCards, setSelectedCards] = useState([]);
  const [cards, setCards] = useState(nineRandomCards);

  return (
    <div className="cards">
      {cards.map((pokeObject) => (
        <Card key={data.id} pokeData={pokeObject} />
      ))}
    </div>
  );
};

export default Cards;
