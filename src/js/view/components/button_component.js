export default class ButtonComponent {
  constructor(id, text, callback) {
    this._button = document.createElement('button');
    this._button.id = id;
    this._button.classList.add('button');
    this._button.innerHTML = text;

    this._button.addEventListener('click', callback);
  }

  getButton() {
    return this._button;
  }
}
