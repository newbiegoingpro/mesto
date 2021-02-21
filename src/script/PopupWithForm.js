import {Popup} from './Popup.js'
export class PopupWithForm extends Popup{
    constructor({submitCallback}, popupSelector){
        super(popupSelector);
        this._submitCallback = submitCallback; 
          
    }
    _getInputValues(){
        
        this._inputList = this._element.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value}
            );
        console.log(this._formValues)
        return this._formValues;
    }
    close(){
        this._element.reset();
        super.close()
        
       }
    
    
    isLoading(boolean){
        if(boolean){
            this._element.querySelector('.popup__save-button').textContent = 'Сохранение..'
        } else {this._element.querySelector('.popup__save-button').textContent = 'Сохранить'}
    }

    setEventListeners(){
        this._element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.isLoading(true);
            setTimeout(10000)
            this._submitCallback(this._getInputValues());
            super.close()
        },{ once: true})
        super.setEventListeners();
    }
    
    
}