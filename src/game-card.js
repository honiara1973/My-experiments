import Component from './component';

class GameCard extends Component {
 constructor(data) {
  super();
  this._name = data.name;
  this._distance = data.distance;
  this._force = data.force;
  this._color = data.color;

  this._onClick = this._onClick.bind(this);
 }

 _onClick() {
  console.log(this._element);
  this._element.classList.add(`waiting`);
 }

 get template() {
   return `
   <div class="card" style="background-color: ${this._color}">
    <h3 class="card-name">${this._name}</h3>
    <div class="card-distance">${this._distance}</div>
   </div>
   `.trim();
 }

createListeners() {
  this._element.addEventListener(`click`, this._onClick);
}

}

export default GameCard;