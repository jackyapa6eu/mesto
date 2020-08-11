const profileEditBtn = document.querySelector('.profile__edit-button');
const profileDisplayName = document.querySelector('.profile__display-name');
const profileProfession = document.querySelector('.profile__profession');
const profileAddBtn = document.querySelector('.profile__add-button');
const places = document.querySelector('.places');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function showPopUp(task) {
    const popupTemplate = document.querySelector('#popup-template').content;
    const popupElement = popupTemplate.cloneNode(true);
    const popupTitle = popupElement.querySelector('.popup__title');
    const popupInputs = popupElement.querySelectorAll('.popup__text-input');
    const popupSubmitBtn = popupElement.querySelector('.popup__submit-button');
    const popUpCloseBtn = popupElement.querySelector('.popup__close-button');
    const popUpContainer = popupElement.querySelector('.popup__container');
    switch (task) {
        case 'edit-profile' :
            popupTitle.textContent = 'Редактировать профиль';
            popupInputs[0].name = 'displayname';
            popupInputs[0].classList.add('popup__text-input_type_display-name');
            popupInputs[0].value = profileDisplayName.textContent;

            popupInputs[1].name = 'profession';     
            popupInputs[1].classList.add('popup__text-input_type_profession');
            popupInputs[1].value = profileProfession.textContent;
            popupSubmitBtn.textContent = 'Сохранить';

            popUpContainer.addEventListener('submit', updateUserData);
            break;
        case 'add-place' :
            popupTitle.textContent = 'Новое место';
            popupInputs[0].name = 'placename';
            popupInputs[0].classList.add('popup__text-input_type_place-name');
            popupInputs[0].placeholder = 'Название'

            popupInputs[1].name = 'profession';     
            popupInputs[1].classList.add('popup__text-input_type_place-link');
            popupInputs[1].placeholder = 'Ссылка на картинку'
            popupSubmitBtn.textContent = 'Создать';           
            popUpContainer.addEventListener('submit', createNewPlace);
    }
    document.querySelector('.footer').after(popupElement);
    
    popUpCloseBtn.addEventListener('click', () => fadeOut('.popup'));
}

function removeElem(classOfEl) {
    event.target.closest(classOfEl).remove(); 
}

function fadeOut(classOfEl) {
    const el = event.target.closest(classOfEl);
    el.classList.add('fade-out');
    window.setTimeout(function() {
        el.remove();
    }, 500);
}

function updateUserData(event) {
    event.preventDefault();
    profileDisplayName.textContent = document.querySelector('.popup__text-input_type_display-name').value;
    profileProfession.textContent = document.querySelector('.popup__text-input_type_profession').value;
    fadeOut('.popup');
}

function addPlace(imgLink, name) {
    const placeTemplate = document.querySelector('#place-template').content;
    const placeElement = placeTemplate.cloneNode(true);
    const placeImage = placeElement.querySelector('.place__image');

    placeImage.src = imgLink;
    placeElement.querySelector('.place__image').alt = name;
    placeElement.querySelector('.place__title').textContent = name;

    placeImage.addEventListener('click', () => showFullPicture(imgLink, name));
    placeElement.querySelector('.place__remove-btn').addEventListener('click', () => removeElem('.place'));
    placeElement.querySelector('.place__like-button').addEventListener('click', toggleLike)
    places.prepend(placeElement);
}

function createNewPlace() {
    event.preventDefault();
    const name = document.querySelector('.popup__text-input_type_place-name').value;
    const imgLink = document.querySelector('.popup__text-input_type_place-link').value;
    addPlace(imgLink, name);
    fadeOut('.popup');
}

function toggleLike() {
    event.currentTarget.classList.toggle('place__like-button_active');
}

function showFullPicture(imgLink, caption) {
    const fullPictureTemplate = document.querySelector('#full-picture-template').content;
    const fullPictureElement = fullPictureTemplate.cloneNode(true);

    fullPictureElement.querySelector('.popup__image').src = imgLink;
    fullPictureElement.querySelector('.popup__caption').textContent = caption;

    fullPictureElement.querySelector('.popup__close-button').addEventListener('click', () => fadeOut('.popup'));

    document.querySelector('.footer').after(fullPictureElement);
}

profileEditBtn.addEventListener('click', () => showPopUp('edit-profile'));
profileAddBtn.addEventListener('click', () => showPopUp('add-place'));

initialCards.forEach(el => addPlace(el.link, el.name));