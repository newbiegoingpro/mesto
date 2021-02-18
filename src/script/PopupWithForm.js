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
        this.spanEraser()
        super.close()
        
       }
    open(){
        super.open();
        if(this._element.classList.contains('popup-add')){
            this.spanEraser()
        }
        
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
            console.log(this._element.querySelector('.popup__save-button').textContent)
        },{ once: true})
        super.setEventListeners();
    }
    spanEraser(){
        this._element.reset();
        const formSpans = this._element.querySelectorAll('.popup__input-error');
        const formInputs = this._element.querySelectorAll('.popup__input');
        formSpans.forEach(span => span.textContent = '');
        formInputs.forEach(input => input.value = '');
    }
    
}