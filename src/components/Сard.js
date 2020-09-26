export default class Card {
  constructor(
    placeData,
    placeSelector,
    handleCardClick,
    popupFullImage,
    fullImage,
    fullImageName
  ) {
    this._name = placeData.placename;
    this._link = placeData.placelink;
    this._placeSelector = placeSelector;
    this._popupFullImage = popupFullImage;
    this._fullImage = fullImage;
    this._fullImageName = fullImageName;
    this._handleCardClick = handleCardClick.bind(this);
  }

  _getTemplate() {
    const placeElement = document
      .querySelector(this._placeSelector)
      .content.cloneNode(true);

    return placeElement;
  }

  createCard() {
    this._placeElement = this._getTemplate();
    this._placeImage = this._placeElement.querySelector(".place__image");
    this._placeImage.src = this._link;
    this._placeImage.alt = this._name;
    this._placeElement.querySelector(".place__title").textContent = this._name;

    this._setEventListeners();

    return this._placeElement;
  }

  _setEventListeners() {
    this._placeImage.addEventListener("click", this._handleCardClick);
    this._placeElement
      .querySelector(".place__remove-btn")
      .addEventListener("click", this._removeElem);
    this._placeElement
      .querySelector(".place__like-button")
      .addEventListener("click", this._toggleLike);
  }

  _removeElem(event) {
    event.target.closest(".place").remove();
  }

  _toggleLike(event) {
    event.currentTarget.classList.toggle("place__like-button_active");
  }
}
