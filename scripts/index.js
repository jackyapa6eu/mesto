const profileEditBtn = document.querySelector('.profile__edit-button');
const profileDisplayName = document.querySelector('.profile__display-name');
const profileProfession = document.querySelector('.profile__profession');
const popUp = document.querySelector('.popup');
const popUpCloseBtn = popUp.querySelector('.popup__close-button');
const popUpContainer = popUp.querySelector('.popup__container');
const inputDisplayName = popUp.querySelector('.popup__text-input_type_display-name');
const inputProffesion = popUp.querySelector('.popup__text-input_type_profession');



function togglePopUp() {
    if (!popUp.classList.contains('popup_opened')) {
        inputDisplayName.value = profileDisplayName.textContent;
        inputProffesion.value = profileProfession.textContent;
    }
    popUp.classList.toggle('popup_opened');
}

function updateUserData(event) {
    event.preventDefault();
    profileDisplayName.textContent = inputDisplayName.value;
    profileProfession.textContent = inputProffesion.value;
    togglePopUp();
}

profileEditBtn.addEventListener('click', togglePopUp);
popUpCloseBtn.addEventListener('click', togglePopUp);
popUpContainer.addEventListener('submit', updateUserData);
