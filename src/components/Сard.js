export default class Card {
  constructor(
    placeData,
    placeSelector,
    handleCardClick,
    handleDeleteCard,
    handleLikeClick,
    popupFullImage,
    fullImage,
    fullImageName,
    myId
  ) {
    this._placeData = placeData;
    this._name = placeData.name;
    this._link = placeData.link;
    this._placeSelector = placeSelector;
    this._popupFullImage = popupFullImage;
    this._fullImage = fullImage;
    this._fullImageName = fullImageName;
    this._handleCardClick = handleCardClick.bind(this);
    this._handleDeleteCard = handleDeleteCard.bind(this);
    this._handleLikeClick = handleLikeClick.bind(this);
    this._myId = myId;
  }

  _getTemplate() {
    const placeElement = document
      .querySelector(this._placeSelector)
      .content.cloneNode(true);

    return placeElement;
  }

  createCard() {
    this._placeElement = this._getTemplate();
    if (!this._isMyCard()) {
      this._placeElement.querySelector('.place__remove-btn').remove();
    }
    this._placeImage = this._placeElement.querySelector(".place__image");
    this._likeBtn = this._placeElement.querySelector(".place__like-button");
    this._likeCounter = this._placeElement.querySelector(".place__like-counter");
    this._placeImage.src = this._link;
    this._placeImage.alt = this._name;
    this._placeElement.querySelector(".place__title").textContent = this._name;
    this.toggleLike(this._placeData);
    this._setEventListeners();

    return this._placeElement;
  }

  _setEventListeners() {
    this._placeImage.addEventListener("click", this._handleCardClick);
    if (this._isMyCard()) {
      this._placeElement
      .querySelector(".place__remove-btn")
      .addEventListener("click", this._handleDeleteCard);
    }
    this._likeBtn.addEventListener("click", this._handleLikeClick);
  }

  isLikedByMe(placeData) {
    return placeData.likes.some(like => {
      return like._id === this._myId
    })
  }

  toggleLike(newPlaceData) {
    if (this.isLikedByMe(newPlaceData)) {
      this._likeBtn.classList.add("place__like-button_active");
    }
    else {
      this._likeBtn.classList.remove("place__like-button_active");
    }
    this._likeCounter.textContent = newPlaceData.likes.length;
    this._placeData = newPlaceData;
  }

  _isMyCard() {
    if (this._placeData.owner._id === this._myId) {
      return true
    }
    else return false
  }
}
