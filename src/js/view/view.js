import ButtonComponent from './components/button_component.js';
import ObjectComponent from './components/object_component.js';

import {ButtonsIdEnum} from './../utils/enums.js';

const CheckedEnum = {
  ALL: 'input',
  CHECKED: 'input:checked'
};

const centralColumn = document.querySelector('#centralColumn');
const leftColumn = document.querySelector('#leftColumn');
const rightColumn = document.querySelector('#rightColumn');

const addButtons = (buttonCallback) => {

  const ButtonsTextEnum = {
    ADD: '>',
    ADD_ALL: '>>',
    REMOVE: '<',
    REMOVE_ALL: '<<'
  };

  for (let key in ButtonsIdEnum) {
    centralColumn.appendChild(new ButtonComponent(ButtonsIdEnum[key],
      ButtonsTextEnum[key], buttonCallback).getButton());
  }
};

const getObjects = (column, query) => {
  return [].map.call(column.querySelectorAll(query), (el) => {
    return el.parentNode;
  });
};

const addObjectsToColumn = (arrObjects, column) => {
  arrObjects.forEach((el) => {
    el.querySelector('input').checked = false;
    column.appendChild(el);
  });
};

const clearSelectedObjects = (element) => {
  let column = element.parentNode.parentNode;
  let checkeds = column.querySelectorAll(CheckedEnum.CHECKED);

  [].forEach.call(checkeds, (el) => {
    if (el.id !== element.id) {
      el.checked = false;
    }
  });
};

const objectComponentClickCallback = (evt) => {
  if (!evt.ctrlKey) {
    clearSelectedObjects(evt.target.previousSibling.previousSibling);
  }

  evt.target.previousSibling.previousSibling.checked =
    !evt.target.previousSibling.previousSibling.checked;
};

const addObjects = (objects) => {
  objects.forEach((el) => {
    leftColumn.appendChild(new ObjectComponent(el.id, el.text,
      objectComponentClickCallback).getObjectComponent());
  });
};

export default class View {
  constructor(objects, buttonCallback) {
    addButtons(buttonCallback);
    addObjects(objects);
  }

  getSelectedAvaliableObjects() {
    return getObjects(leftColumn, CheckedEnum.CHECKED);
  }

  getAllAvaliableObjects() {
    return getObjects(leftColumn, CheckedEnum.ALL);
  }

  getSelectedSelectObjects() {
    return getObjects(rightColumn, CheckedEnum.CHECKED);
  }

  getAllSelectObjects() {
    return getObjects(rightColumn, CheckedEnum.ALL);
  }

  addObjects(arrObjects) {
    addObjectsToColumn(arrObjects, rightColumn);
  }

  removeObjects(arrObjects) {
    addObjectsToColumn(arrObjects, leftColumn);
  }
}
