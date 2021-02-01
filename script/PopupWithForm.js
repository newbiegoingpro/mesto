import {Popup} from './Popup.js'
export class PopupWithForm extends Popup{
    constructor({submitCallback}, popupSelector){
        super(popupSelector);
        this._submitCallback = submitCallback; 
          
    }
   
    _getInputValues(){
        
        this._element = super._getElement()
        this._inputList = this._element.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value}
            );
        console.log(this._formValues)
        return this._formValues;
    }
    setEventListeners(){
        this._element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallback(this._getInputValues());
            super.close()
        })
        super.setEventListeners();
    }
    spanEraser(form){
        const formSpans = form.getElementsByTagName('span');
        const formInputs = form.getElementsByTagName('input');
        formSpans[0].textContent = '';
        formSpans[1].textContent = '';
        formInputs[0].classList.remove('popup__input_state-invalid');
        formInputs[1].classList.remove('popup__input_state-invalid');
    } 
    close(){
        this.spanEraser(this._element)
        this._element.reset();
        super.close()
       }
}