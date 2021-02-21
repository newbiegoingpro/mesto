export const profile = document.querySelector('.profile');
export const popupOpenButton = profile.querySelector('.profile__edit-button');
export const popupEdit = document.querySelector('.popup-edit');
export const popupContainer = document.querySelector('.popup__Container')
export const popupCloseButton = popupEdit.querySelector('.popup__close-button');
export const popupName = popupEdit.querySelector('.popup__input_name');
export const popupProfession = popupEdit.querySelector('.popup__input_profession');
export const popupSaveButton = popupEdit.querySelector('.popup__save-button');
export const name = profile.querySelector('.profile__name');
export const profession = profile.querySelector('.profile__profession');
export const addButton = document.querySelector('.profile__add-button');
export const popupAdd = document.querySelector('.popup-add');
export const addPopupOpenButton = document.querySelector('.profile__add-button');
export const addPopupClose = document.querySelector('.popup-add__close-button');
export const popupAddPlace = document.querySelector('.popup__input_place');
export const popupAddLink = document.querySelector('.popup__input_link');
export const popupAddSaveButton = document.querySelector('.popup-add__save-button');
export const template = document.querySelector('.template');
export const gallery = document.querySelector('.gallery');
export const galleryItem = gallery.querySelector('.gallery__item');
export const closeupPopupCloseBtn = document.querySelector('.closeupPopup__close-button');
export const closeupPopupTxt = document.querySelector('.closeupPopup__text')
export const closeupPopupPic = document.querySelector('.closeupPopup__pic');
export const closeupPopup = document.querySelector('.closeupPopup');
export const avatarButton = document.querySelector('.profile__avatar-button');
export const avatarPopup = document.querySelector('.popup-avatar');
export const likeCounter = document.querySelector('.gallery__like-counter');
/*export const deletePopup = document.querySelector('.popup-delete');*/
export const avatar = document.querySelector('.profile__avatar');
export const apiConfig = {
    nameSelector: '.profile__name',
    proffSelector: '.profile__profession',
    avatarSelector: '.profile__avatar'
}

export const validityConfig = {
    formSelector: '.form',
    buttonSelector: '.popup__save-button',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_state-invalid',
    inactiveButtonClass: 'popup__save-button_inactive',
    errorVisibleClass: 'popup__input-error_active'
 }
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
