const Cards = [
  [`dragon`, 2, 1, `red`],
  [`lion`, 1, 2, `yellow`],
  [`rabbit`, 2, 2, `green`]
];

const getAllCards = () => {

  const cards = [];

  for (let it of Cards) {
    const [name, distance, force, color] = it;

    const card = {
      name,
      distance,
      force,
      color,
    };

    cards.push(card);
  }
  return cards;
};

export default getAllCards;
