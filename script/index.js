let profile = document.querySelector('.profile');

let popupOpenButton = profile.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');

let popupCloseButton = popup.querySelector('.popup__close-button');

let popupName = popup.querySelector('.popup__input_name');

let popupProfession = popup.querySelector('.popup__input_profession');

let popupSaveButton = popup.querySelector('.popup__save-button');

let name = profile.querySelector('.profile__name');

let profession = profile.querySelector('.profile__profession');






function popupToggle(){ 
    popup.classList.toggle('popup_opened');
    if (popup.classList.contains('popup_opened')){
    popupName.value = name.textContent
    popupProfession.value = profession.textContent
}
};


function popupSaved(evt){   
    evt.preventDefault();
    name.textContent = (popupName.value); 
    profession.textContent = (popupProfession.value); 
    popupToggle()
};

popupOpenButton.addEventListener('click', popupToggle);

popupCloseButton.addEventListener('click', popupToggle);

popup.addEventListener('submit', popupSaved);



