import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm, cleanBeforeClose) {
    super(popupSelector);
    this._headleSubmitForm = handleSubmitForm;
    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._cleanBeforeClose = cleanBeforeClose;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._headleSubmitForm.bind(this));
  }
  close() {
    this._cleanBeforeClose();
    super.close();
  }
  _getInputValues() {
    const inputList = Array.from(this._popupElement.querySelectorAll('input'));
    const inputValues = {};
    inputList.forEach(input => {
      inputValues[input.name] = input.value;
    })
    return inputValues
  }
}