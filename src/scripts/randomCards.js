const generateNineRandomCards = (data) => {
  let latestData = [...data];
  const randomCards = [];

  while (randomCards.length < 9) {
    const randomIndex = Math.floor(Math.random() * latestData.length);
    const randomPokemonObject = latestData[randomIndex];

    latestData = latestData.filter(
      (pokemonObject, index) => index !== randomIndex
    );

    randomCards.push(randomPokemonObject);
  }

  return randomCards;
};

const shuffleArray = (cards) => {
  const shuffledCards = [];
  let latestCards = [...cards];

  while (latestCards.length > 0) {
    const randomIndex = Math.floor(Math.random() * latestCards.length);
    const randomCard = latestCards[randomIndex];

    latestCards = latestCards.filter((card, index) => index !== randomIndex);

    shuffledCards.push(randomCard);
  }

  return shuffledCards;
};

const getEightRandomlySelectedCards = (selectedCards) => {
  let latestSelectedCards = [...selectedCards];
  const randomSelectedCards = [];

  while (randomSelectedCards.length < 8) {
    const randomIndex = Math.floor(Math.random() * latestSelectedCards.length);
    const randomSelectedPokemonObject = latestSelectedCards[randomIndex];

    latestSelectedCards = latestSelectedCards.filter(
      (pokeObject, index) => index !== randomIndex
    );

    randomSelectedCards.push(randomSelectedPokemonObject);
  }

  return randomSelectedCards;
};

const getObtainableCards = (data, selectedCards) => {
  let obtainableCards = [...data];
  const latestSelectedCards = [...selectedCards];

  let index = 0;
  while (index < latestSelectedCards.length) {
    const includedCard = latestSelectedCards[index];
    obtainableCards = obtainableCards.filter(
      (card) => card.id !== includedCard.id
    );
    index++;
  }

  return obtainableCards;
};

const generateRandomCards = (data, selectedCards, number) => {
  let obtainableCards = getObtainableCards(data, selectedCards);

  const randomCards = [];

  while (randomCards.length !== number) {
    const randomIndex = Math.floor(Math.random() * obtainableCards.length);
    const randomCard = obtainableCards[randomIndex];

    obtainableCards = obtainableCards.filter(
      (card, index) => index !== randomIndex
    );

    randomCards.push(randomCard);
  }

  return randomCards;
};

const generateRandomCardsBasedOnSelectedCards = (data, selectedCards) => {
  if (selectedCards.length > 8) {
    const eightRandomSelectedCards =
      getEightRandomlySelectedCards(selectedCards);

    const oneRandomNewCard = generateRandomCards(data, selectedCards, 1);

    let latestCardArray = [...eightRandomSelectedCards, ...oneRandomNewCard];

    latestCardArray = shuffleArray(latestCardArray);
    return latestCardArray;
  }

  const cardLength = 9;
  const amountOfCards = cardLength - selectedCards.length;

  const randomNewCards = generateRandomCards(
    data,
    selectedCards,
    amountOfCards
  );

  let latestCardArray = [...selectedCards, ...randomNewCards];

  latestCardArray = shuffleArray(latestCardArray);
  return latestCardArray;
};

export { generateNineRandomCards, generateRandomCardsBasedOnSelectedCards };
