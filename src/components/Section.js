export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element, fromArray = false) {
    fromArray ? this._container.append(element) : this._container.prepend(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(cardsArr) {
    this.clear();
    cardsArr.forEach(item => {
      this._renderer(item, true);
    });
  }
}
