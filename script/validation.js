const showError = (formElement, inputElement, errorVisibleClass, inputErrorClass) => {
    const errorElem = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(errorElem)
    errorElem.textContent = inputElement.validationMessage;
    inputElement.classList.add(inputErrorClass);
    errorElem.classList.add(errorVisibleClass);
  };

const hideError = (formElement, inputElement, errorVisibleClass, inputErrorClass) => {
    const errorElem = formElement.querySelector(`#${inputElement.id}-error`);
    errorElem.textContent = '';
    inputElement.classList.remove(inputErrorClass);
    errorElem.classList.remove(errorVisibleClass);
  };

const toggleButtonState = (buttonElement, boolean) => {
    if(boolean){
        buttonElement.classList.remove('popup__save-button_inactive');
        buttonElement.disabled = false;
        console.log('doesNotHaveInvaldInput')
    } else {
        buttonElement.classList.add('popup__save-button_inactive');
        buttonElement.disabled = 'disabled';
        console.log('hasInvaldInput')
    }
}

const checkInputValidity = (formElement, inputElement, errorVisibleClass, inputErrorClass) => {
      if(!inputElement.validity.valid){
          showError(formElement, inputElement, errorVisibleClass, inputErrorClass);
      } else {
          hideError(formElement, inputElement, errorVisibleClass, inputErrorClass);
      }
}

const setEvtListn = (formElement, buttonSelector, inputSelector, inputErrorClass, errorVisibleClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(buttonSelector);
    toggleButtonState(buttonElement, formElement.checkValidity());
    inputList.forEach(input => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(formElement, input, errorVisibleClass, inputErrorClass)
            toggleButtonState(buttonElement, formElement.checkValidity());
        })    
    });
    
}

const enableValidation = ({formSelector, buttonSelector, inputSelector, inputErrorClass, errorVisibleClass}) => {
   const formList = Array.from(document.querySelectorAll(formSelector));
   formList.forEach(form => {
       setEvtListn(form, buttonSelector, inputSelector, inputErrorClass, errorVisibleClass)
   })}

enableValidation({
   formSelector: '.form',
   buttonSelector: '.popup__save-button',
   inputSelector: '.popup__input',
   inputErrorClass: 'popup__input_state-invalid',
   inactiveButtonClass: 'popup__save-button_inactive',
   errorVisibleClass: 'popup__input-error_active'
});
