export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeByOverlay = this._closeByOverlay.bind(this);
  }

  open() {
    this._popupElement.addEventListener("mousedown", this._closeByOverlay);
    document.addEventListener("keyup", this._handleEscClose);
    this._popupElement.classList.add("popup_opened");
  }

  close() {
    this._popupElement.removeEventListener("mousedown", this._closeByOverlay);
    document.removeEventListener("keyup", this._handleEscClose);
    this._popupElement.classList.remove("popup_opened");
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  _closeByOverlay(event) {
    if (event.currentTarget === event.target) {
      this.close();
    }
  }
  
  setEventListeners() {
    this._popupElement
      .querySelector(".popup__close-button")
      .addEventListener("click", this.close.bind(this));
  }
}
