let profile = document.querySelector('.profile');

let popupOpenButton = profile.querySelector('.profile__edit-button-popup-opened');

let popup = document.querySelector('.popup');

let popupCloseButton = popup.querySelector('.popup__close-button');

let popupName = popup.querySelector('.popup__name');

let popupProfession = popup.querySelector('.popup__profession');

let popupSaveButton = popup.querySelector('.popup__save-button');

let name = profile.querySelector('.profile__name');
let profession = profile.querySelector('.profile__profession');

function popupToggle(){
    
    
    popup.classList.toggle('popup_opened');
    popupName.setAttribute('placeholder', name.innerText)
    popupProfession.setAttribute('placeholder', profession.innerText)
}
let popupNameInput = popupName.innerText;
function popupSaved(evt){
    
     
    
    name.innerText = (popup.querySelector('.popup__name').value); 
    profession.innerText = (popup.querySelector('.popup__profession').value);
    evt.preventDefault();
    popupToggle()
};

console.log(popupNameInput)

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('submit', popupSaved);


