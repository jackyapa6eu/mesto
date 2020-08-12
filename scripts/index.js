const profileEditBtn = document.querySelector('.profile__edit-button');
const profileDisplayName = document.querySelector('.profile__display-name');
const profileProfession = document.querySelector('.profile__profession');
const profileNameInput = document.querySelector('.popup__text-input_type_display-name');
const profileProfessionInput = document.querySelector('.popup__text-input_type_profession');
const newPlaceNameInput = document.querySelector('.popup__text-input_type_place-name');
const newPlaceLinkInput = document.querySelector('.popup__text-input_type_place-link');
const formEditProfile = document.querySelector('.popup__container_type_edit-profile');
const formAddPlace = document.querySelector('.popup__container_type_add-place');
const profileAddBtn = document.querySelector('.profile__add-button');
const places = document.querySelector('.places');
const popUpCloseBtns = document.querySelectorAll('.popup__close-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPlace = document.querySelector('.popup_type_add-place');
const popupFullImage = document.querySelector('.popup_type_figure');
const fullImage = popupFullImage.querySelector('.popup__image');
const fullImageName = popupFullImage.querySelector('.popup__caption');
const placeTemplate = document.querySelector('#place-template').content;

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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
popUpCloseBtns.forEach(el => el.addEventListener('click', () => closePopup(event.target.closest('.popup'))));

initialCards.forEach(el => places.prepend(createCard(el.link, el.name)))