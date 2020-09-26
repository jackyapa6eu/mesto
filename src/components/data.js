const profileEditBtn = document.querySelector(".profile__edit-button");
const displayNameSelector = ".profile__display-name";
const professionSelector = ".profile__profession";
const profileNameInput = document.querySelector(
  ".popup__input_type_display-name"
);
const profileProfessionInput = document.querySelector(
  ".popup__input_type_profession"
);
const formEditProfile = document.querySelector(
  ".popup__form_type_edit-profile"
);
const formAddPlace = document.querySelector(".popup__form_type_add-place");
const profileAddBtn = document.querySelector(".profile__add-button");
const placesListSelector = ".places";
const placeTemplateSelector = "#place-template";
const popupEditProfileSelector = ".popup_type_edit-profile";
const popupAddPlaceSelector = ".popup_type_add-place";
const popUpFullImageSelector = ".popup_type_figure";
const popupFullImage = document.querySelector(popUpFullImageSelector);
const fullImage = popupFullImage.querySelector(".popup__image");
const fullImageName = popupFullImage.querySelector(".popup__caption");

export {
  profileEditBtn,
  displayNameSelector,
  professionSelector,
  profileNameInput,
  profileProfessionInput,
  formEditProfile,
  formAddPlace,
  profileAddBtn,
  placesListSelector,
  popupEditProfileSelector,
  popupAddPlaceSelector,
  popUpFullImageSelector,
  popupFullImage,
  fullImage,
  fullImageName,
  placeTemplateSelector,
};
