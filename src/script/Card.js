import {closeupPopup, closeupPopupTxt, closeupPopupPic, openPopup} from './const.js';

export class Card {
    constructor({handleCardClick}, data, cardSelector) {
      this._alt = data.name;
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick
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
      const thisPic = this._element.querySelector('.gallery__pic');
      thisPic.src = this._link;
      this._element.querySelector('.gallery__text').textContent = this._name;
      thisPic.alt = this._alt;
      console.log(this._element)
      return this._element;
    }

    _handleDeleteButton(){
      this._element.querySelector('.gallery__delete-button').closest('.gallery__item').remove();
    }

    _handleLikeButton(){
      this._element.querySelector('.gallery__like-button').classList.toggle('gallery__like-button_active')
    }
 
    _handleOpenPopup(){
      document.querySelector('.closeupPopup').classList.add('popup_opened')
        
      }
     
    _handleClosePopup(){
        document.querySelector('.closeupPopup').classList.remove('popup_opened');
       
      }

    _setEventListeners(){
        this._element.querySelector('.gallery__pic').addEventListener('click', () => {
          
          this._handleCardClick(this._handleOpenPopup())
        })
        this._element.querySelector('.gallery__delete-button').addEventListener('click', () => {
          this._handleDeleteButton()
        })
        this._element.querySelector('.gallery__like-button').addEventListener('click', () => {
          this._handleLikeButton()
        })
        }
}

