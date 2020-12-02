let profile = document.querySelector('.profile');

let popupOpenButton = profile.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');

let popupCloseButton = popup.querySelector('.popup__close-button');

let popupName = popup.querySelector('.popup__input_name');

let popupProfession = popup.querySelector('.popup__input_profession');

let popupSaveButton = popup.querySelector('.popup__save-button');

let name = profile.querySelector('.profile__name');

let profession = profile.querySelector('.profile__profession');


const popupToggleHandler = (arg) => {
    arg.classList.toggle('popup_opened')
}



function popupToggle(){ 
    popupToggleHandler(popup);
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

profile.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('profile__edit-button-pic')){
        popupToggle();
    }
});

popupCloseButton.addEventListener('click', popupToggle);

popup.addEventListener('submit', popupSaved);



