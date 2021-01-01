
export class Validator{
    constructor(config, formElement){
        this._formSelector = config.formSelector;
        this._buttonSelector = config.buttonSelector;
        this._inputSelector = config.inputSelector;
        this._inputErrorClass = config.inputErrorClass;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._errorVisibleClass = config.errorVisibleClass;
        this._element = formElement;
    }
    
    _showError(formElement, inputElement){
        const errorElem = this._element.querySelector(`#${inputElement.id}-error`);
        errorElem.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._inputErrorClass);
        errorElem.classList.add(this._errorVisibleClass);
      };
    
    _hideError(formElement, inputElement){
        const errorElem = this._element.querySelector(`#${inputElement.id}-error`);
        errorElem.textContent = '';
        inputElement.classList.remove(this._inputErrorClass);
        errorElem.classList.remove(this._errorVisibleClass);
      };
    
    _toggleButtonState(buttonElement, boolean){
        if(boolean){
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = false;
        } else {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.disabled = 'disabled';
        }
    }
    
    _checkInputValidity(formElement, inputElement) {
          if(!inputElement.validity.valid){
            this._showError(this._element, inputElement);
          } else {
            this._hideError(this._element, inputElement);
          }
    }
    
   _setEvtListn(){
        const inputList = this._element.querySelectorAll(this._inputSelector);
        const buttonElement = this._element.querySelector(this._buttonSelector);
        if (this._element.classList.contains('popup-edit')){
            this._toggleButtonState(buttonElement, true);
        } else {
            this._toggleButtonState(buttonElement, false);
        }
        
        inputList.forEach(input => {
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(this._element, input)
                this._toggleButtonState(buttonElement, this._element.checkValidity());
            })    
        });
        
    }
    
    enableValidation(){
       
        this._setEvtListn()
       }



};

const editForm = document.querySelector('.popup-edit');

const addForm = document.querySelector('.popup-add');

const forms = document.querySelectorAll('.form');

console.log(forms[0])

const validityConfig = {
   formSelector: '.form',
   buttonSelector: '.popup__save-button',
   inputSelector: '.popup__input',
   inputErrorClass: 'popup__input_state-invalid',
   inactiveButtonClass: 'popup__save-button_inactive',
   errorVisibleClass: 'popup__input-error_active'
}

 
const editFormValidated = new Validator(validityConfig, editForm);

editFormValidated.enableValidation();


const addFormValidated = new Validator(validityConfig, addForm);

addFormValidated.enableValidation();