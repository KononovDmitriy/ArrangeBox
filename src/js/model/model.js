export default class Model {
  constructor() {
    this._model = [
      {
        id: 'obj1',
        text: 'ОБЪЕКТ 1'
      },
      {
        id: 'obj2',
        text: 'ОБЪЕКТ 2'
      },
      {
        id: 'obj3',
        text: 'ОБЪЕКТ 3'
      }
    ];
  }

  getModel() {
    return this._model;
  }
}
