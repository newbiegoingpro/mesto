import {Validator, spanEraser} from './FormValidator.js';
import {Card} from './Card.js';

const profile = document.querySelector('.profile');
const popupOpenButton = profile.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const popupCloseButton = popupEdit.querySelector('.popup__close-button');
const popupName = popupEdit.querySelector('.popup__input_name');
const popupProfession = popupEdit.querySelector('.popup__input_profession');
const popupSaveButton = popupEdit.querySelector('.popup__save-button');
const name = profile.querySelector('.profile__name');
const profession = profile.querySelector('.profile__profession');
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const addPopupOpenButton = document.querySelector('.profile__add-button');
const addPopupClose = document.querySelector('.popup-add__close-button');
const popupAddPlace = document.querySelector('.popup__input_place');
const popupAddLink = document.querySelector('.popup__input_link');
const popupAddSaveButton = document.querySelector('.popup-add__save-button');
const template = document.querySelector('.template');
const gallery = document.querySelector('.gallery');
const galleryItem = gallery.querySelector('.gallery__item');
const closeupPopupCloseBtn = document.querySelector('.closeupPopup__close-button');
export const closeupPopupTxt = document.querySelector('.closeupPopup__text')
export const closeupPopupPic = document.querySelector('.closeupPopup__pic');
export const closeupPopup = document.querySelector('.closeupPopup');
const body = document.querySelector('.content');
const main = document.querySelector('.main');
export const initialCards = [
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

export const popupEscapeHandler = (evt) => {
    if(evt.key === 'Escape'){
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

export const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', popupEscapeHandler);
    
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', popupEscapeHandler);
}

popupOpenButton.addEventListener('click', () => {
    popupName.value = name.textContent;
    popupProfession.value = profession.textContent;
    openPopup(popupEdit);
    spanEraser(popupEdit);
    });
 
addPopupOpenButton.addEventListener('click', () => {   
    openPopup(popupAdd);
    spanEraser(popupAdd);
});

gallery.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('.gallery__pic'))
    openPopup(closeupPopup)
    });

closeupPopup.addEventListener('click', (evt) => {
    if((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__close-button-image'))){
        closePopup(closeupPopup)
    }
})

popupEdit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    closePopup(popupEdit);
    name.textContent = popupName.value;
    profession.textContent = popupProfession.value;
});

popupEdit.addEventListener('click', (evt) => {
    if((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__close-button-image'))){
        closePopup(popupEdit);
        popupEdit.reset();
        }
    })

popupAdd.addEventListener('click', (evt) => {
    if((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__close-button-image'))){
        closePopup(popupAdd);
        popupAdd.reset();
            }
        })

initialCards.forEach((item) => {
    const card = new Card(item, '.template');
    const cardElement = card.generateCard();       
    gallery.append(cardElement);
          });  
          
const addCard = () => { 
          
const item = new Card({
              name: popupAddPlace.value,
              link: popupAddLink.value
            }, '.template')
    const popupItem = item.generateCard();
    closePopup(popupAdd); 
    gallery.prepend(popupItem); 
    popupAddPlace.value = ''; 
    popupAddLink.value = ''; 
    }; 
     
    popupAdd.addEventListener('submit', (evt) => { 
      evt.preventDefault(); 
      addCard(); 
    }); 

const validityConfig = {
   formSelector: '.form',
   buttonSelector: '.popup__save-button',
   inputSelector: '.popup__input',
   inputErrorClass: 'popup__input_state-invalid',
   inactiveButtonClass: 'popup__save-button_inactive',
   errorVisibleClass: 'popup__input-error_active'
}
 
const editFormValidated = new Validator(validityConfig, popupEdit);

editFormValidated.enableValidation();

const addFormValidated = new Validator(validityConfig, popupAdd);

addFormValidated.enableValidation();