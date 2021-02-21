
export class FormValidator{
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
    
    toggleButtonState(buttonElement, boolean){
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

        this._element.addEventListener('reset', () => {
            inputList.forEach((inputElement) => {
                this._hideError(this._element, inputElement)
                this.toggleButtonState(buttonElement, this._element.checkValidity());
            })
        });
   
        inputList.forEach(input => {
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(this._element, input)
                this.toggleButtonState(buttonElement, this._element.checkValidity());
            })    
        });
        
    }
    
    enableValidation(){
       
        this._setEvtListn()
       }

};

