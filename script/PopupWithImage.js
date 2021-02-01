import {Popup} from './Popup.js'
export class PopupWithImage extends Popup{
    constructor({imageSelector, textSelector, popupSelector}){
        super(popupSelector);
        this._imageSelector = imageSelector;
        this._textSelector = textSelector;
    }
    
    open(data){
        const dataValues = Object.values(data)
        console.log(dataValues)
        this._element = super._getElement();
        this._image = this._element
        .querySelector(this._imageSelector);
        this._text = this._element
        .querySelector(this._textSelector);
        console.log(this._text)
        this._image.src = dataValues[1]
        this._image.alt =  dataValues[0]
        this._text.textContent = dataValues[0]
        super.open();
    }
    close(){
        super.close()
    }
    
    setEventListeners(){
        super.setEventListeners()
    }
}

