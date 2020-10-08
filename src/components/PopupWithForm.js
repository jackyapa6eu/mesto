import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm, cleanBeforeClose) {
    super(popupSelector);
    this._headleSubmitForm = handleSubmitForm;
    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._cleanBeforeClose = cleanBeforeClose;
    this._btnSubmit = this._popupElement.querySelector('.popup__button');
    this._btnSubmitDefaultText = this._btnSubmit.textContent;
  }
  submitForm(event) {
    event.preventDefault();
    const inputsData = this._getInputValues();
    this._headleSubmitForm(inputsData);
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this.submitForm.bind(this));
  }
  close() {
    if (this._cleanBeforeClose) {
      this._cleanBeforeClose();
    }
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
  showLoader(btnText) {
    this._btnSubmit.textContent = btnText;
  }
  hideLoader() {
    this._btnSubmit.textContent = this._btnSubmitDefaultText;
  }
}