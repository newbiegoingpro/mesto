import * as indexScr from './index.js';
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

const closeupPopupCloseBtn = document.querySelector('.closeupPopup__close-button');
const closeupPopupTxt = document.querySelector('.closeupPopup__text')
const closeupPopupPic = document.querySelector('.closeupPopup__pic');
const closeupPopup = document.querySelector('.closeupPopup');
const likeButton = document.querySelector('.gallery__like-button');
const deleteButton = document.querySelector('.gallery__delete-button');
const popupOpened = document.querySelector('.popup_opened');

closeupPopup.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('popup_opened'))
  indexScr.togglePopup(closeupPopup)
})

export class Card {
    constructor(data, cardSelector) {
      this._alt = data.name;
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(
            this._cardSelector
        )
        .content
        .querySelector('.gallery__item')
        .cloneNode(true);
  
      return cardElement;
    }

    generateCard(){
      this._element = this._getTemplate();
      this._setEventListeners()
      this._element.querySelector('.gallery__pic').src = this._link;
      this._element.querySelector('.gallery__text').textContent = this._name;
      this._element.querySelector('.gallery__pic').alt = this._alt;
      
      return this._element;
    }

    _handleDeleteButton(){
      this._element.querySelector('.gallery__delete-button').closest('.gallery__item').remove();
    }

    _handleLikeButton(){
      this._element.querySelector('.gallery__like-button').classList.toggle('gallery__like-button_active')
    }
 
    _handleOpenPopup(){
        closeupPopupPic.src = this._link;
        closeupPopup.classList.add('popup_opened');
        closeupPopupTxt.textContent = this._name;
      }
     
    _handleClosePopup(){
        closeupPopup.classList.remove('popup_opened');
        closeupPopupPic.src = '';
        closeupPopupTxt.textContent = '';
      }

    _setEventListeners(){
        this._element.querySelector('.gallery__pic').addEventListener('click', () => {
          this._handleOpenPopup()
        })
        closeupPopupCloseBtn.addEventListener('click', () => {
          this._handleClosePopup()
        })
        this._element.querySelector('.gallery__delete-button').addEventListener('click', () => {
          this._handleDeleteButton()
        })
        this._element.querySelector('.gallery__like-button').addEventListener('click', () => {
          this._handleLikeButton()
        })
        }
}

initialCards.forEach((item) => {
    const card = new Card(item, '.template');
    const cardElement = card.generateCard();
  
    document.querySelector('.gallery').append(cardElement);
  });  
  
  const addCard = () => { 
  
    const item = new Card({
      name: indexScr.popupAddPlace.value,
      link: indexScr.popupAddLink.value
    }, '.template')
    const popupItem = item.generateCard();
  
  indexScr.togglePopup(indexScr.addPopup);
  document.querySelector('.gallery').prepend(popupItem);
  indexScr.popupAddPlace.value = '';
  indexScr.popupAddLink.value = '';
  };
  
  indexScr.addPopup.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addCard();
  });
