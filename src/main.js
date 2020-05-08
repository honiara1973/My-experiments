import GameCard from './game-card';
import getAllCards from './card-data';

const fieldContainer = document.querySelector(`.field-container`);
const startContainer = document.querySelector(`.card-start-field`);

const renderGameCard = (container, cards) => {
  const card = new GameCard(cards);
  console.log(cards);
  container.appendChild(card.render());
};

const createCards = (container) => {
  const cardData = getAllCards();
  console.log(cardData);
  cardData.forEach((it) => {
    renderGameCard(container, it);
  });
};

const onContainerClick = (evt) => {
  const active = evt.target;
  const waitingCard = document.querySelector(`.waiting`);
  active.append(waitingCard);
  waitingCard.classList.remove(`waiting`);
  console.log(waitingCard);
  //console.log(active);
};

const init = () => {
  
  createCards(startContainer);
  //renderGameCard(busyContainer);
  console.log(startContainer);
  fieldContainer.addEventListener(`click`, onContainerClick);
  
};

init();
