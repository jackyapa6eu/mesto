import './index.css'; 
import {
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
  initialValidateObj
} from "../utils/data.js";
import { initialCards } from "../utils/initialCards.js";
import Card from "../components/Сard.js";
import { FormValidator } from "../components/Validate.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";

const formAddPlaceValidator = new FormValidator(
  initialValidateObj,
  formAddPlace
);
const formEditProfileValidator = new FormValidator(
  initialValidateObj,
  formEditProfile
);

formAddPlaceValidator.enableValidation();
formEditProfileValidator.enableValidation();

const popUpFullImage = new PopupWithImage(popUpFullImageSelector);
popUpFullImage.setEventListeners();

function getCard(cardData) {
  const card = new Card(
    cardData,
    placeTemplateSelector,
    function handleCardClick() {
      popUpFullImage.open(this);
    },
    popupFullImage,
    fullImage,
    fullImageName
  );
  return card.createCard();
}

const initialCardList = new Section(
  {
    data: initialCards,
    renderer: (item, fromArray) => {
      const placeElement = getCard(item);
      initialCardList.addItem(placeElement, fromArray);
    },
  },
  placesListSelector
);

initialCardList.renderItems();

const popupEditProfile = new PopupWithForm(
  popupEditProfileSelector,
  function handleSubmitForm(userNewData) {
    userInfo.setUserInfo(userNewData);
    popupEditProfile.close();
  },
  formEditProfileValidator.cleanFormBeforeClose.bind(formEditProfileValidator)
);

popupEditProfile.setEventListeners();
profileEditBtn.addEventListener("click", openEditProfile);

const popupAddPlace = new PopupWithForm(
  popupAddPlaceSelector,
  function handleSubmitForm(cardData) {
    const placeElement = getCard(cardData);
    initialCardList.addItem(placeElement);
    popupAddPlace.close();
  },
  formAddPlaceValidator.cleanFormBeforeClose.bind(formAddPlaceValidator)
);

popupAddPlace.setEventListeners();
profileAddBtn.addEventListener("click", popupAddPlace.open.bind(popupAddPlace));

const userInfo = new UserInfo({
  displayNameSelector: displayNameSelector,
  professionSelector: professionSelector,
});

function openEditProfile() {
  const userData = userInfo.getUserInfo();
  profileNameInput.value = userData.displayName;
  profileProfessionInput.value = userData.profession;
  popupEditProfile.open();
}
