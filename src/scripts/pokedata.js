import { Pokedex } from 'pokeapi-js-wrapper';

const removeStringDashes = (text) => {
  return text.replace(/[-]/gm, ' ');
};

const getImportantData = (pokemon) => {
  return {
    name: removeStringDashes(pokemon.name),
    id: pokemon.id,
    image: pokemon.sprites.front_default,
  };
};

const getIndividualPokemons = (requests) => {
  return Promise.all(requests).then((values) => {
    const importantValues = values.map((pokemon) => getImportantData(pokemon));
    const filteredValues = importantValues.filter(
      (pokemon) => pokemon.image !== null
    );

    return filteredValues;
  });
};

const preLoadImages = (data) => {
  const imageData = data.map((pokeObject) => {
    return new Promise((resolve, reject) => {
      const image = new Image();

      image.onload = () => {
        resolve(image);
      };

      image.onerror = () => reject('image failed to load in');
      image.onabort = () => reject('image failed to load in');

      image.src = pokeObject.image;
    });
  });

  return Promise.all(imageData).then(() => {
    return data;
  });
};

const getPokemonData = () => {
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
    .then((data) => {
      return preLoadImages(data);
    });
};

const getFakeData = () => {
  return [
    {
      name: 'bulbasaur',
      id: 1,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      name: 'ivysaur',
      id: 2,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
    {
      name: 'venusaur',
      id: 3,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
    {
      name: 'charmander',
      id: 4,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
      name: 'charmeleon',
      id: 5,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    },
    {
      name: 'charizard',
      id: 6,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    },
    {
      name: 'squirtle',
      id: 7,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
      name: 'wartortle',
      id: 8,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    },
    {
      name: 'blastoise',
      id: 9,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    },
    {
      name: 'caterpie',
      id: 10,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    },
    {
      name: 'metapod',
      id: 11,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    },
    {
      name: 'butterfree',
      id: 12,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    },
    {
      name: 'weedle',
      id: 13,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
    },
    {
      name: 'kakuna',
      id: 14,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
    },
    {
      name: 'beedrill',
      id: 15,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
    },
    {
      name: 'pidgey',
      id: 16,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
    },
    {
      name: 'pidgeotto',
      id: 17,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
    },
    {
      name: 'pidgeot',
      id: 18,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
    },
    {
      name: 'rattata',
      id: 19,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    },
    {
      name: 'raticate',
      id: 20,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
    },
    {
      name: 'spearow',
      id: 21,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
    },
    {
      name: 'fearow',
      id: 22,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
    },
    {
      name: 'ekans',
      id: 23,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
    },
    {
      name: 'arbok',
      id: 24,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
    },
    {
      name: 'pikachu',
      id: 25,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    {
      name: 'raichu',
      id: 26,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
    },
    {
      name: 'sandshrew',
      id: 27,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
    },
    {
      name: 'sandslash',
      id: 28,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
    },
    {
      name: 'nidoran-f',
      id: 29,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
    },
    {
      name: 'nidorina',
      id: 30,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
    },
    {
      name: 'nidoqueen',
      id: 31,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
    },
    {
      name: 'nidoran-m',
      id: 32,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
    },
    {
      name: 'nidorino',
      id: 33,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
    },
    {
      name: 'nidoking',
      id: 34,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
    },
    {
      name: 'clefairy',
      id: 35,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
    },
    {
      name: 'clefable',
      id: 36,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
    },
    {
      name: 'vulpix',
      id: 37,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
    },
    {
      name: 'ninetales',
      id: 38,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
    },
    {
      name: 'jigglypuff',
      id: 39,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    },
    {
      name: 'wigglytuff',
      id: 40,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
    },
    {
      name: 'zubat',
      id: 41,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
    },
    {
      name: 'golbat',
      id: 42,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
    },
    {
      name: 'oddish',
      id: 43,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
    },
    {
      name: 'gloom',
      id: 44,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
    },
    {
      name: 'vileplume',
      id: 45,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
    },
    {
      name: 'paras',
      id: 46,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
    },
    {
      name: 'parasect',
      id: 47,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
    },
    {
      name: 'venonat',
      id: 48,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
    },
    {
      name: 'venomoth',
      id: 49,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
    },
    {
      name: 'diglett',
      id: 50,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
    },
    {
      name: 'dugtrio',
      id: 51,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
    },
    {
      name: 'meowth',
      id: 52,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    },
    {
      name: 'persian',
      id: 53,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
    },
    {
      name: 'psyduck',
      id: 54,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
    },
    {
      name: 'golduck',
      id: 55,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
    },
    {
      name: 'mankey',
      id: 56,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
    },
    {
      name: 'primeape',
      id: 57,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
    },
    {
      name: 'growlithe',
      id: 58,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
    },
    {
      name: 'arcanine',
      id: 59,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
    },
    {
      name: 'poliwag',
      id: 60,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
    },
    {
      name: 'poliwhirl',
      id: 61,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
    },
    {
      name: 'poliwrath',
      id: 62,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
    },
    {
      name: 'abra',
      id: 63,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
    },
    {
      name: 'kadabra',
      id: 64,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
    },
    {
      name: 'alakazam',
      id: 65,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
    },
    {
      name: 'machop',
      id: 66,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
    },
    {
      name: 'machoke',
      id: 67,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
    },
    {
      name: 'machamp',
      id: 68,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
    },
    {
      name: 'bellsprout',
      id: 69,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
    },
    {
      name: 'weepinbell',
      id: 70,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png',
    },
    {
      name: 'victreebel',
      id: 71,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png',
    },
    {
      name: 'tentacool',
      id: 72,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png',
    },
    {
      name: 'tentacruel',
      id: 73,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
    },
    {
      name: 'geodude',
      id: 74,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
    },
    {
      name: 'graveler',
      id: 75,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
    },
    {
      name: 'golem',
      id: 76,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png',
    },
    {
      name: 'ponyta',
      id: 77,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png',
    },
    {
      name: 'rapidash',
      id: 78,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
    },
    {
      name: 'slowpoke',
      id: 79,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png',
    },
    {
      name: 'slowbro',
      id: 80,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
    },
    {
      name: 'magnemite',
      id: 81,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png',
    },
    {
      name: 'magneton',
      id: 82,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png',
    },
    {
      name: 'farfetchd',
      id: 83,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png',
    },
    {
      name: 'doduo',
      id: 84,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
    },
    {
      name: 'dodrio',
      id: 85,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png',
    },
    {
      name: 'seel',
      id: 86,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png',
    },
    {
      name: 'dewgong',
      id: 87,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png',
    },
    {
      name: 'grimer',
      id: 88,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
    },
    {
      name: 'muk',
      id: 89,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
    },
    {
      name: 'shellder',
      id: 90,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png',
    },
    {
      name: 'cloyster',
      id: 91,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
    },
    {
      name: 'gastly',
      id: 92,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
    },
    {
      name: 'haunter',
      id: 93,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png',
    },
    {
      name: 'gengar',
      id: 94,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    },
    {
      name: 'onix',
      id: 95,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
    },
    {
      name: 'drowzee',
      id: 96,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png',
    },
    {
      name: 'hypno',
      id: 97,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png',
    },
    {
      name: 'krabby',
      id: 98,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
    },
    {
      name: 'kingler',
      id: 99,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png',
    },
    {
      name: 'voltorb',
      id: 100,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png',
    },
  ];
};

const getTwelveFakeData = () => {
  return [
    {
      name: 'bulbasaur',
      id: 1,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      name: 'ivysaur',
      id: 2,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
    {
      name: 'venusaur',
      id: 3,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
    {
      name: 'charmander',
      id: 4,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
      name: 'charmeleon',
      id: 5,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    },
    {
      name: 'charizard',
      id: 6,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    },
    {
      name: 'squirtle',
      id: 7,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
      name: 'wartortle',
      id: 8,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    },
    {
      name: 'blastoise',
      id: 9,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    },
    {
      name: 'caterpie',
      id: 10,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    },
    {
      name: 'metapod',
      id: 11,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    },
    {
      name: 'butterfree',
      id: 12,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    },
  ];
};

const getNineFakeData = () => {
  return [
    {
      name: 'bulbasaur',
      id: 1,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      name: 'ivysaur',
      id: 2,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
    {
      name: 'venusaur',
      id: 3,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
    {
      name: 'charmander',
      id: 4,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
      name: 'charmeleon',
      id: 5,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    },
    {
      name: 'charizard',
      id: 6,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    },
    {
      name: 'squirtle',
      id: 7,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
      name: 'wartortle',
      id: 8,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    },
    {
      name: 'blastoise',
      id: 9,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    },
  ];
};

export { getPokemonData, getFakeData, getNineFakeData, getTwelveFakeData };
