export default class ObjectComponent {
  constructor(id, text, callback) {
    const ELEMENT_TEMPLATE =
      `<input id="${id}" type="checkbox">
      <label>${text}</label>`;

    this._objectComponent = document.createElement('div');
    this._objectComponent.classList.add('object');
    this._objectComponent.innerHTML = ELEMENT_TEMPLATE;

    this._objectComponent.querySelector('label').addEventListener('click',
      callback);
  }

  getObjectComponent() {
    return this._objectComponent;
  }
}
