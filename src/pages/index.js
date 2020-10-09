import "./index.css";
import {
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
  initialValidateObj,
} from "../utils/data.js";
import Card from "../components/Сard.js";
import { FormValidator } from "../components/FormValidator";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Api from "../components/Api.js";
import PopupDeleteRequest from "../components/PopupDeleteRequest";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-16",
  headers: {
    authorization: "67c1746d-dc65-4cb3-99d8-23254d14e06e",
    "Content-Type": "application/json",
  },
});

api
  .getUserData()
  .then((result) => {
    userInfo.setUserInfo(result);
  })
  .catch((err) => {
    console.log(err);
  });

api
  .getInitialCards()
  .then((result) => {
    initialCardList.renderItems(result);
  })
  .catch((err) => {
    console.log(err);
  });

const formAddPlaceValidator = new FormValidator(
  initialValidateObj,
  formAddPlace
);
const formEditProfileValidator = new FormValidator(
  initialValidateObj,
  formEditProfile
);
const formEditAvatarValidator = new FormValidator(
  initialValidateObj,
  formEditAvatar
);

formAddPlaceValidator.enableValidation();
formEditProfileValidator.enableValidation();
formEditAvatarValidator.enableValidation();

const popUpFullImage = new PopupWithImage(popUpFullImageSelector);
popUpFullImage.setEventListeners();

function getCard(cardData) {
  const card = new Card(
    cardData,
    placeTemplateSelector,
    function handleCardClick() {
      popUpFullImage.open(this);
    },
    function handleDeleteCard(event) {
      const card = event.target.closest(".place");
      popupDeleteRequest.open(this._placeData._id, card);
    },
    function handleLikeClick() {
      if (this.isLikedByMe(this._placeData)) {
        api
          .unLikeCard(this._placeData._id)
          .then((result) => {
            this.toggleLike(result);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .likeCard(this._placeData._id)
          .then((result) => {
            this.toggleLike(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    popupFullImage,
    fullImage,
    fullImageName,
    userInfo.getUserId()
  );
  return card.createCard();
}

const initialCardList = new Section(
  {
    renderer: (item, fromArray) => {
      const placeElement = getCard(item);
      initialCardList.addItem(placeElement, fromArray);
    },
  },
  placesListSelector
);

const popupEditAvatar = new PopupWithForm(
  popupEditAvatarSelector,
  function handleSubmitForm(userNewAvatar) {
    this.showLoader("Сохранение...");
    api
      .updateAvatar(userNewAvatar)
      .then((result) => {
        userInfo.setUserAvatar(result);
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.hideLoader();
      });
  },
  formEditAvatarValidator.cleanFormBeforeClose.bind(formEditAvatarValidator)
);

popupEditAvatar.setEventListeners();
profileEditAvatarBtn.addEventListener(
  "click",
  popupEditAvatar.open.bind(popupEditAvatar)
);

const popupEditProfile = new PopupWithForm(
  popupEditProfileSelector,
  function handleSubmitForm(userNewData) {
    this.showLoader("Сохранение...");
    api
      .updateUserData(userNewData)
      .then((result) => {
        userInfo.setUserInfo(result);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.hideLoader();
      });
  },
  formEditProfileValidator.cleanFormBeforeClose.bind(formEditProfileValidator)
);

popupEditProfile.setEventListeners();
profileEditBtn.addEventListener("click", openEditProfile);

const popupAddPlace = new PopupWithForm(
  popupAddPlaceSelector,
  function handleSubmitForm(cardData) {
    this.showLoader("Создание...");
    api
      .uploadNewCard(cardData)
      .then((result) => {
        const placeElement = getCard(result);
        initialCardList.addItem(placeElement);
        popupAddPlace.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.hideLoader();
      });
  },
  formAddPlaceValidator.cleanFormBeforeClose.bind(formAddPlaceValidator)
);

popupAddPlace.setEventListeners();
profileAddBtn.addEventListener("click", popupAddPlace.open.bind(popupAddPlace));

const popupDeleteRequest = new PopupDeleteRequest(
  popupDeleteRequestSelector,
  function handleSubmitForm(event) {
    event.preventDefault();
    api
      .deleteCard(this.cardId)
      .then(() => {
        this.cardElement.remove();
      })
      .catch((err) => {
        console.log(err);
      });

    popupDeleteRequest.close();
  }
);

popupDeleteRequest.setEventListeners();

const userInfo = new UserInfo({
  displayNameSelector: displayNameSelector,
  professionSelector: professionSelector,
  avatarImageSelector: avatarImageSelector,
});

function openEditProfile() {
  const userData = userInfo.getUserInfo();
  profileNameInput.value = userData.displayName;
  profileProfessionInput.value = userData.profession;
  popupEditProfile.open();
}
