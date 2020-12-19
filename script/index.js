const profile = document.querySelector('.profile');
const popupOpenButton = profile.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup-edit');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupName = popup.querySelector('.popup__input_name');
const popupProfession = popup.querySelector('.popup__input_profession');
const popupSaveButton = popup.querySelector('.popup__save-button');
const name = profile.querySelector('.profile__name');
const profession = profile.querySelector('.profile__profession');
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup-add');
const addPopupClose = document.querySelector('.popup-add__close-button');
const popupAddPlace = document.querySelector('.popup__input_place');
const popupAddLink = document.querySelector('.popup__input_link');
const popupAddSaveButton = document.querySelector('.popup-add__save-button');
const template = document.querySelector('.template');
const gallery = document.querySelector('.gallery');
const galleryItem = gallery.querySelector('.gallery__item');
const closeupPopupCloseBtn = document.querySelector('.closeupPopup__close-button');
const closeupPopupTxt = document.querySelector('.closeupPopup__text')
const closeupPopupPic = document.querySelector('.closeupPopup__pic');
const closeupPopup = document.querySelector('.closeup-Popup');
const body = document.querySelector('.content');
const main = document.querySelector('.main');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const popupToggleHandler = (arg) => {
    arg.classList.toggle('popup_opened')
}

const popupEscapeHandler = (evt) => {
    if(evt.key === 'Escape'){
        document.querySelector('.popup').classList.remove('popup_opened');
        document.querySelector('.popup-add').classList.remove('popup_opened');
        document.querySelector('.closeupPopup').classList.remove('popup_opened');
    }
}
      
const getCard = function(data) {
    const cardItem = template.content.cloneNode(true);   
    cardItem.querySelector('.gallery__pic').src = data.link;
    cardItem.querySelector('.gallery__text').innerText = data.name;
    cardItem.querySelector('.gallery__like-button').addEventListener('click', (evt) => {            
         evt.target.classList.toggle('gallery__like-button_active');       
    })
    cardItem.querySelector('.gallery__delete-button-pic').addEventListener('click', (evt) => {       
         evt.target.closest('.gallery__item').remove();  
    })
    cardItem.querySelector('.gallery__pic').addEventListener('click', (evt) => {      
         popupToggleHandler(closeupPopup);
         closeupPopup.addEventListener('keydown', popupEscapeHandler);
         closeupPopupPic.src = evt.target.closest('.gallery__pic').src
         closeupPopupTxt.textContent = evt.target.closest('.gallery__item').textContent    
    })
    return cardItem;
  };

function render() {
    const cardsInitial = initialCards.map((element) =>
        getCard(element)
        );
        gallery.append(...cardsInitial)    
    };

render();

const bindTest = () => {    
    const item = getCard( {
    name: popupAddPlace.value,
    link: popupAddLink.value
})
popupToggleHandler(addPopup);
gallery.prepend(item);
popupAddPlace.value = '';
popupAddLink.value = '';
};

const spanEraser = (form) => {
    const formSpans = form.getElementsByTagName('span');
    const formInputs = form.getElementsByTagName('input');
    console.log(formSpans)
    formSpans[0].textContent = '';
    formSpans[1].textContent = '';
    formInputs[0].classList.remove('popup__input_state-invalid');
    formInputs[1].classList.remove('popup__input_state-invalid');
} 


document.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('profile__edit-button')){
        popupName.value = name.textContent;
        popupProfession.value = profession.textContent;
        toggleButtonState(popupSaveButton, popup.checkValidity());
        popupToggleHandler(popup);
        popup.addEventListener('keydown', popupEscapeHandler);
        spanEraser(popup)
    }
    else if(evt.target.classList.contains('profile__add-button')){
        popupToggleHandler(addPopup);
        toggleButtonState(popupAddSaveButton, addPopup.checkValidity());
        addPopup.addEventListener('keydown', popupEscapeHandler);
    }
});

popup.addEventListener('submit', (evt) => {
    evt.preventDefault();
    popupToggleHandler(popup);
    name.textContent = popupName.value;
    profession.textContent = popupProfession.value;
    
});

popup.addEventListener('click', (evt) => {
    if((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__close-button-image'))){
        popupToggleHandler(popup);
        popupName.removeEventListener('keydown', popupEscapeHandler);
        popupProfession.removeEventListener('keydown', popupEscapeHandler);
        spanEraser(popup);
        popup.reset();
        }
    })

addPopup.addEventListener('click', (evt) => {
    if((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__close-button-image'))){
        popupToggleHandler(addPopup);
        addPopup.reset();
        spanEraser(addPopup);
            }
        })

closeupPopup.addEventListener('click', (evt) => {
        if((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__close-button-image'))){
            popupToggleHandler(closeupPopup);
            }
        })
        
addPopup.addEventListener('submit', (evt) => {
    evt.preventDefault();
    bindTest();
});


