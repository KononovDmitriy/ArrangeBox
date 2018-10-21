import View from './../view/view.js';
import Model from './../model/model.js';

import {ButtonsIdEnum} from './../utils/enums.js';

const buttonsCallback = function (evt) {
  switch (evt.target.id) {
  case ButtonsIdEnum.ADD:
    this._view.addObjects(this._view.getSelectedAvaliableObjects());
    break;
  case ButtonsIdEnum.ADD_ALL:
    this._view.addObjects(this._view.getAllAvaliableObjects());
    break;
  case ButtonsIdEnum.REMOVE:
    this._view.removeObjects(this._view.getSelectedSelectObjects());
    break;
  case ButtonsIdEnum.REMOVE_ALL:
    this._view.removeObjects(this._view.getAllSelectObjects());
    break;
  }
};

export default class Presenter {
  constructor() {
    this._model = new Model();
    this._view = new View(this._model.getModel(), buttonsCallback.bind(this));
  }
}
