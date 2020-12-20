const profile = document.querySelector('.profile');
const popupOpenButton = profile.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const popupCloseButton = popupEdit.querySelector('.popup__close-button');
const popupName = popupEdit.querySelector('.popup__input_name');
const popupProfession = popupEdit.querySelector('.popup__input_profession');
const popupSaveButton = popupEdit.querySelector('.popup__save-button');
const name = profile.querySelector('.profile__name');
const profession = profile.querySelector('.profile__profession');
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup-add');
const addPopupOpenButton = document.querySelector('.profile__add-button');
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
const closeupPopup = document.querySelector('.closeupPopup');
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

const popupEscapeHandler = (evt) => {
    if(evt.key === 'Escape'){
        const openedPopup = document.querySelector('.popup_opened');
        togglePopup(openedPopup);
    }
}

const togglePopup = (popup) => {
    popup.classList.toggle('popup_opened')
    if(popup.classList.contains('popup_opened')){
        document.addEventListener('keydown', popupEscapeHandler)
    }   else {
        document.removeEventListener('keydown', popupEscapeHandler)
    }
}

const getCard = function(data) {
    const cardItem = template.content.cloneNode(true);
    const cardImage = cardItem.querySelector('.gallery__pic');   
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardItem.querySelector('.gallery__text').innerText = data.name;
    cardItem.querySelector('.gallery__like-button').addEventListener('click', (evt) => {            
         evt.target.classList.toggle('gallery__like-button_active');       
    })
    cardItem.querySelector('.gallery__delete-button-pic').addEventListener('click', (evt) => {       
         evt.target.closest('.gallery__item').remove();  
    })
    cardImage.addEventListener('click', (evt) => {      
         togglePopup(closeupPopup);
         closeupPopupPic.src = evt.target.closest('.gallery__pic').src;
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

const addCard = () => {    
    const item = getCard( {
    name: popupAddPlace.value,
    link: popupAddLink.value
})
togglePopup(addPopup);
gallery.prepend(item);
popupAddPlace.value = '';
popupAddLink.value = '';
};

const spanEraser = (form) => {
    const formSpans = form.getElementsByTagName('span');
    const formInputs = form.getElementsByTagName('input');
    formSpans[0].textContent = '';
    formSpans[1].textContent = '';
    formInputs[0].classList.remove('popup__input_state-invalid');
    formInputs[1].classList.remove('popup__input_state-invalid');
} 

popupOpenButton.addEventListener('click', () => {
    popupName.value = name.textContent;
    popupProfession.value = profession.textContent;
    toggleButtonState(popupSaveButton, popupEdit.checkValidity(), validityConfig);
    togglePopup(popupEdit);
    spanEraser(popupEdit);
    });
 
addPopupOpenButton.addEventListener('click', () => {   
    togglePopup(addPopup);
    toggleButtonState(popupAddSaveButton, addPopup.checkValidity(), validityConfig);
    spanEraser(addPopup);
});

popupEdit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    togglePopup(popupEdit);
    name.textContent = popupName.value;
    profession.textContent = popupProfession.value;
});

popupEdit.addEventListener('click', (evt) => {
    if((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__close-button-image'))){
        togglePopup(popupEdit);
        popupEdit.reset();
        }
    })

addPopup.addEventListener('click', (evt) => {
    if((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__close-button-image'))){
        togglePopup(addPopup);
        addPopup.reset();
            }
        })

closeupPopup.addEventListener('click', (evt) => {
    if((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__close-button-image'))){
        togglePopup(closeupPopup);
            }
        })
        
addPopup.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addCard();
});


