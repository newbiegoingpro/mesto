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
    setEventListeners(){
        this._element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallback(this._getInputValues());
            super.close()
        },{ once: true})
        super.setEventListeners();
    }
    spanEraser(){
        this._element.reset();
        const formSpans = this._element.getElementsByTagName('span');
        const formInputs = this._element.getElementsByTagName('input');
        formSpans[0].textContent = '';
        formSpans[1].textContent = '';
        formInputs[0].classList.remove('popup__input_state-invalid');
        formInputs[1].classList.remove('popup__input_state-invalid');
    }
    
}