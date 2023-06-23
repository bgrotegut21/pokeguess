import { Pokedex } from 'pokeapi-js-wrapper';

const NUMBER_OF_TIMES = 5;

const interval = {
  offset: 1,
  limit: 10,
};

const getImportantData = (pokemon) => {
  return {
    name: pokemon.name,
    id: pokemon.id,
    image: pokemon.sprites.front_default,
  };
};

const getIndividualPokemons = (requests) => {
  return Promise.all(requests).then((values) => {
    const importantValues = values.map((pokemon) => getImportantData(pokemon));

    return importantValues;
  });
};

const getPokemonData = (times) => {
  let amountOfTimes = 0;
  if (typeof times === 'number') amountOfTimes = times;

  const pokedex = new Pokedex();

  return pokedex
    .getPokemonsList()
    .then((resource) => {
      return resource.results;
    })
    .then((results) => {
      const requests = results.map((result) =>
        pokedex.getPokemonByName(result.name)
      );
      return getIndividualPokemons(requests);
    })
    .catch((err) => {
      if (amountOfTimes < NUMBER_OF_TIMES) {
        amountOfTimes++;
        return getPokemonData(times + 1);
      }
      return {
        error: err.message,
        message: 'Failed to fetch all data please refresh the page',
      };
    });
};

export { getPokemonData };
