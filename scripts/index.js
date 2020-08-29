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
const popupsList = document.querySelectorAll('.popup');
const popUpCloseBtns = document.querySelectorAll('.popup__close-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPlace = document.querySelector('.popup_type_add-place');
const popupFullImage = document.querySelector('.popup_type_figure');
const fullImage = popupFullImage.querySelector('.popup__image');
const fullImageName = popupFullImage.querySelector('.popup__caption');
const placeTemplate = document.querySelector('#place-template').content;

function cleanFormBeforeClose(popup) {
  const formElement = popup.querySelector(initialValidateObj.formSelector);
  const inputList = Array.from(formElement.querySelectorAll(initialValidateObj.inputSelector));
  const buttonElement = formElement.querySelector(initialValidateObj.submitButtonSelector);  
  const rest = {
    'inputErrorClass' : initialValidateObj.inputErrorClass, 
    'errorClass' : initialValidateObj.errorClass
  };
  inputList.forEach(inputElement => {
    inputElement.value = '';
    hideInputError(formElement, inputElement, rest);
  })
  buttonElement.classList.add(initialValidateObj.inactiveButtonClass);
  buttonElement.setAttribute('disabled', '');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupByEscape);
}

function closePopupByEscape(event) {
  const popup = document.querySelector('.popup_opened');
  if (event.key === 'Escape') {
    closePopup(popup);
  }
}

function closePopup(popup) {
  if (popup.classList.contains('popup_type_add-place') || popup.classList.contains('popup_type_edit-profile')) {
    cleanFormBeforeClose(popup);
  }
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupByEscape);
}

function openEditProfile(popup) {
  profileNameInput.value = profileDisplayName.textContent;
  profileProfessionInput.value = profileProfession.textContent;
  openPopup(popup);
}

function removeElem(event) {
  event.target.closest('.place').remove(); 
}

function updateUserData(event) {
  event.preventDefault();
  profileDisplayName.textContent = profileNameInput.value;
  profileProfession.textContent = profileProfessionInput.value;
  closePopup(event.target.closest('.popup'));
}

function createCard(imgLink, name) {
  const placeElement = placeTemplate.cloneNode(true);
  const placeImage = placeElement.querySelector('.place__image');

  placeImage.src = imgLink;
  placeElement.querySelector('.place__image').alt = name;
  placeElement.querySelector('.place__title').textContent = name;

  placeImage.addEventListener('click', () => showFullPicture(imgLink, name));
  placeElement.querySelector('.place__remove-btn').addEventListener('click', removeElem);
  placeElement.querySelector('.place__like-button').addEventListener('click', toggleLike)
  return placeElement
}

function createNewPlace(event) {
  event.preventDefault();
  const card = createCard(newPlaceLinkInput.value, newPlaceNameInput.value);
  places.prepend(card);
  closePopup(event.target.closest('.popup'));
} 

function toggleLike(event) {
  event.currentTarget.classList.toggle('place__like-button_active');
}

function showFullPicture(imgLink, caption) {
  fullImage.src = imgLink;
  fullImage.alt = caption;
  fullImageName.textContent = caption;
  openPopup(popupFullImage);
}

profileEditBtn.addEventListener('click', () => openEditProfile(popupEditProfile));
profileAddBtn.addEventListener('click', () => openPopup(popupAddPlace));
formEditProfile.addEventListener('submit', updateUserData);
formAddPlace.addEventListener('submit', createNewPlace);
popupsList.forEach(popup => popup.addEventListener('click', event => {
  if (event.currentTarget === event.target) {
    closePopup(event.currentTarget);
  }
}))
popUpCloseBtns.forEach(el => el.addEventListener('click', () => closePopup(event.target.closest('.popup'))));

initialCards.forEach(el => places.prepend(createCard(el.link, el.name)));



