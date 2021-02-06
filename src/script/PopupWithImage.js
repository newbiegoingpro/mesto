import {Popup} from './Popup.js'
export class PopupWithImage extends Popup{
    constructor({imageSelector, textSelector, popupSelector}){
        super(popupSelector);
        this._image = this._element
        .querySelector(imageSelector);
        this._text = this._element
        .querySelector(textSelector);
    } 
    open(data){
        console.log(this._text)
        this._image.src = data.link
        this._image.alt =  data.name
        this._text.textContent = data.name
        super.open();
    }
    close(){
        super.close()
    }
    
    setEventListeners(){
        super.setEventListeners()
    }
}

