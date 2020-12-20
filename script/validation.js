const showError = (formElement, inputElement, config) => {
    const errorElem = formElement.querySelector(`#${inputElement.id}-error`);
    errorElem.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.inputErrorClass);
    errorElem.classList.add(config.errorVisibleClass);
  };

const hideError = (formElement, inputElement, config) => {
    const errorElem = formElement.querySelector(`#${inputElement.id}-error`);
    errorElem.textContent = '';
    inputElement.classList.remove(config.inputErrorClass);
    errorElem.classList.remove(config.errorVisibleClass);
  };

const toggleButtonState = (buttonElement, boolean, config) => {
    if(boolean){
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add(config.inactiveButtonClass);
        buttonElement.disabled = 'disabled';
    }
}

const checkInputValidity = (formElement, inputElement, config) => {
      if(!inputElement.validity.valid){
          showError(formElement, inputElement, config);
      } else {
          hideError(formElement, inputElement, config);
      }
}

const setEvtListn = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.buttonSelector);
    toggleButtonState(buttonElement, formElement.checkValidity(), config);
    inputList.forEach(input => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(formElement, input, config)
            toggleButtonState(buttonElement, formElement.checkValidity(), config);
        })    
    });
    
}

const enableValidation = (config) => {
   const formList = Array.from(document.querySelectorAll(config.formSelector));
   formList.forEach(form => {
       setEvtListn(form, config)
   })}

const validityConfig = {
   formSelector: '.form',
   buttonSelector: '.popup__save-button',
   inputSelector: '.popup__input',
   inputErrorClass: 'popup__input_state-invalid',
   inactiveButtonClass: 'popup__save-button_inactive',
   errorVisibleClass: 'popup__input-error_active'
}

enableValidation(validityConfig);
