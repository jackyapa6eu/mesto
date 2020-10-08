const profileEditBtn = document.querySelector(".profile__edit-button");
const profileEditAvatarBtn = document.querySelector(".profile__overlay");
const displayNameSelector = ".profile__display-name";
const professionSelector = ".profile__profession";
const avatarImageSelector = ".profile__avatar-image";
const profileNameInput = document.querySelector(
  ".popup__input_type_display-name"
);
const profileProfessionInput = document.querySelector(
  ".popup__input_type_profession"
);
const formEditProfile = document.querySelector(
  ".popup__form_type_edit-profile"
);
const formEditAvatar = document.querySelector(".popup__form_type_edit-avatar");
const formAddPlace = document.querySelector(".popup__form_type_add-place");
const profileAddBtn = document.querySelector(".profile__add-button");
const placesListSelector = ".places";
const placeTemplateSelector = "#place-template";
const popupEditProfileSelector = ".popup_type_edit-profile";
const popupEditAvatarSelector = ".popup_type_edit-avatar";
const popupAddPlaceSelector = ".popup_type_add-place";
const popUpFullImageSelector = ".popup_type_figure";
const popupDeleteRequestSelector = ".popup_type_delete-request"
const popupFullImage = document.querySelector(popUpFullImageSelector);
const fullImage = popupFullImage.querySelector(".popup__image");
const fullImageName = popupFullImage.querySelector(".popup__caption");
const initialValidateObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export {
  profileEditBtn,
  profileEditAvatarBtn,
  displayNameSelector,
  professionSelector,
  avatarImageSelector,
  profileNameInput,
  profileProfessionInput,
  formEditProfile,
  formEditAvatar,
  formAddPlace,
  profileAddBtn,
  placesListSelector,
  popupEditProfileSelector,
  popupEditAvatarSelector,
  popupAddPlaceSelector,
  popUpFullImageSelector,
  popupDeleteRequestSelector,
  popupFullImage,
  fullImage,
  fullImageName,
  placeTemplateSelector,
  initialValidateObj
};
