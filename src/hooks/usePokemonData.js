import { useEffect, useState } from 'react';
import { getPokemonData } from '../scripts/pokedata.js';

const usePokemonData = () => {
  const [condition, setCondition] = useState('loading');
  const [errorData, setErrorData] = useState(null);
  const [data, setData] = useState(null);

  const NUMBER_OF_TIMES = 5;

  useEffect(() => {
    let amountOfTimes = 0;

    const retievePokemonData = () => {
      getPokemonData()
        .then((data) => {
          setData(data);
          setCondition('active');
        })
        .catch((err) => {
          if (amountOfTimes < NUMBER_OF_TIMES) {
            amountOfTimes += 1;
            return retievePokemonData();
          }

          const errorData = {
            message: 'Could not fetch data please refresh page!',
            error: err.message,
          };
          setCondition('error');
          setErrorData(errorData);
        });
    };
    retievePokemonData();
  }, []);

  return [condition, errorData, data];
};

export { usePokemonData };
