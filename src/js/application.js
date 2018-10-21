import Presenter from './presenter/presenter.js';

export default class Application {
  start() {
    this.presenter = new Presenter();
  }
}
