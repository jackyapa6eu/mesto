const profileEditBtn = document.querySelector('.profile__edit-button');
const profileDisplayName = document.querySelector('.profile__display-name');
const profileProfession = document.querySelector('.profile__profession');
const profileNameInput = document.querySelector('.popup__input_type_display-name');
const profileProfessionInput = document.querySelector('.popup__input_type_profession');
const newPlaceNameInput = document.querySelector('.popup__input_type_place-name');
const newPlaceLinkInput = document.querySelector('.popup__input_type_place-link');
const formEditProfile = document.querySelector('.popup__form_type_edit-profile');
const formAddPlace = document.querySelector('.popup__form_type_add-place');
const profileAddBtn = document.querySelector('.profile__add-button');
const places = document.querySelector('.places');
const placeTemplateSelector = '#place-template';
const popupsList = document.querySelectorAll('.popup');
const popUpCloseBtns = document.querySelectorAll('.popup__close-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPlace = document.querySelector('.popup_type_add-place');
const popupFullImage = document.querySelector('.popup_type_figure');
const fullImage = popupFullImage.querySelector('.popup__image');
const fullImageName = popupFullImage.querySelector('.popup__caption');

export { profileEditBtn, profileDisplayName, profileProfession, 
  profileNameInput, profileProfessionInput, newPlaceNameInput,
  newPlaceLinkInput, formEditProfile, formAddPlace, 
  profileAddBtn, places, popupsList, 
  popUpCloseBtns, popupEditProfile, 
  popupAddPlace, popupFullImage, fullImage, fullImageName,
  placeTemplateSelector
}