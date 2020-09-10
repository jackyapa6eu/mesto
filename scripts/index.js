const formAddPlaceValidator = new FormValidator(initialValidateObj, formAddPlace);
const formEditProfileValidator = new FormValidator(initialValidateObj, formEditProfile);

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupByEscape);
}

function openEditProfile(popup) {
  formEditProfileValidator.cleanFormBeforeOpen();
  
  profileNameInput.value = profileDisplayName.textContent;
  profileProfessionInput.value = profileProfession.textContent;
  openPopup(popup);
}

function openAddPlace(popup) {
  formAddPlaceValidator.cleanFormBeforeOpen();

  openPopup(popup);
}

function closePopupByEscape(event) {
  const popup = document.querySelector('.popup_opened');
  if (event.key === 'Escape') {
    closePopup(popup);
  }
}

function closePopupByOverlay(event) {
  if (event.currentTarget === event.target) {
    closePopup(event.currentTarget);
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupByEscape);
}

function updateUserData(event) {
  event.preventDefault();
  profileDisplayName.textContent = profileNameInput.value;
  profileProfession.textContent = profileProfessionInput.value;
  closePopup(event.target.closest('.popup'));
}

function createNewPlace(event) {
  event.preventDefault();
  const cardData = {
    name: newPlaceNameInput.value,
    link: newPlaceLinkInput.value
  }
  addingCard(cardData, placeTemplateSelector);
  closePopup(event.target.closest('.popup'));
} 

function addingCard(el, placeTemplateSelector) {
  const card = new Card(el, placeTemplateSelector, openPopup, popupFullImage, fullImage, fullImageName);
  const placeElement = card.createCard();

  places.prepend(placeElement);
}

profileEditBtn.addEventListener('click', () => openEditProfile(popupEditProfile));
profileAddBtn.addEventListener('click', () => openAddPlace(popupAddPlace));
formEditProfile.addEventListener('submit', updateUserData);
formAddPlace.addEventListener('submit', createNewPlace);
popupsList.forEach(popup => popup.addEventListener('click', closePopupByOverlay));
popUpCloseBtns.forEach(el => el.addEventListener('click', () => closePopup(event.target.closest('.popup'))));

initialCards.forEach((el) => addingCard(el, placeTemplateSelector));

formAddPlaceValidator.enableValidation();
formEditProfileValidator.enableValidation();

import {  profileEditBtn, profileDisplayName, profileProfession, 
          profileNameInput, profileProfessionInput, newPlaceNameInput,
          newPlaceLinkInput, formEditProfile, formAddPlace, 
          profileAddBtn, places, popupsList, 
          popUpCloseBtns, popupEditProfile, 
          popupAddPlace, popupFullImage, fullImage, fullImageName,
          placeTemplateSelector
        } from './data.js'
import { initialCards } from './initialCards.js'
import { Card } from './Сard.js'
import { FormValidator, initialValidateObj } from './Validate.js'