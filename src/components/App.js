import '../styles/App.css';
import { getPokemonData } from '../scripts/pokedata';

import Loading from './Loading.js';
import Navigation from './Navigation.js';
import Cards from './Cards.js';
import Error from './Error.js';

import { useState, useEffect } from 'react';
import { getFakeData } from '../scripts/utils';

function App() {
  const fakeData = getFakeData();

  const [condition, setCondition] = useState('active');

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [data, setData] = useState(fakeData);

  // useEffect(() => {
  //   getPokemonData().then((pokeData) => {
  //     console.log(pokeData);
  //     if (pokeData.error) setCondition('error');
  //     else setCondition('active');

  //     setData(pokeData);
  //   });
  // }, []);

  return (
    <div className="App">
      <Navigation score={score} bestScore={bestScore} />
      {condition === 'loading' && <Loading />}
      {condition === 'active' && (
        <Cards
          data={data}
          score={score}
          bestScore={bestScore}
          setScore={setScore}
          setBestScore={setBestScore}
        />
      )}
      {condition === 'error' && <Error data={data} />}
    </div>
  );
}

export default App;
