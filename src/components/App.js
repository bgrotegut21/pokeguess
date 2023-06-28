import '../styles/App.css';

import { usePokemonData } from '../hooks/usePokemonData';

import Loading from './Loading.js';
import Navigation from './Navigation.js';
import Cards from './Cards.js';
import Error from './Error.js';

import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [condition, errorData, data] = usePokemonData();

  return (
    <div className={`app app-${condition}`}>
      <Navigation theme={condition} score={score} bestScore={bestScore} />
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
      {condition === 'error' && <Error data={errorData} />}
    </div>
  );
}

export default App;
