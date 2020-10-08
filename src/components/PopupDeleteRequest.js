import Popup from './Popup.js';

export default class PopupDeleteRequest extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._headleSubmitForm = handleSubmitForm.bind(this);
    this._popupForm = this._popupElement.querySelector('.popup__form');
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._headleSubmitForm);
  }
  open(cardId, card) {
    this.cardId = cardId;
    this.cardElement = card;
    super.open();
  }
}