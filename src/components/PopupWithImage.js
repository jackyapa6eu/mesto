import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(card) {
    card._fullImage.src = card._link;
    card._fullImage.alt = card._name;
    card._fullImageName.textContent = card._name;
    super.open();
  }
}
