import {popupOpenButton, addPopupOpenButton, popupEdit, popupAdd, popupCloseButton, addPopupClose, popupContainer} from './const.js';
export class Popup {
    constructor(popupSelector){
        this._popupSelector = popupSelector;
    }
    _getElement(){
        const popupElement = document
              .querySelector(this._popupSelector)

        return popupElement    
    }
    open(){
        this._element = this._getElement();
        this._element.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose)
    }
    close(){
        this._element = this._getElement();
        this._element.classList.remove('popup_opened')
        document.removeEventListener('keydown', this._handleEscClose)
    }
    _handleEscClose(evt){
        
        if(evt.key === 'Escape'){
            console.log('HEllo')
            const openedPopup = document.querySelector('.popup_opened')
            openedPopup.classList.remove('popup_opened');
        }
    }
; 
    setEventListeners(){
        this._handleEscClose = this._handleEscClose.bind(this);
        this._element = this._getElement();
        this._element.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup__close-button-image') || evt.target.classList.contains('popup_opened')){
            this.close()
        }
        })    
    }
}
    


