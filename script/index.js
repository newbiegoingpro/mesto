const profile = document.querySelector('.profile');
const popupOpenButton = profile.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
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
const popupAddButton = document.querySelector('.popup-add__save-button');
const template = document.querySelector('.template');
const gallery = document.querySelector('.gallery');
const galleryItem = gallery.querySelector('.gallery__item');
const closeupPopupCloseBtn = document.querySelector('.closeupPopup__close-button');
const closeupPopupTxt = document.querySelector('.closeupPopup__text')
const closeupPopupPic = document.querySelector('.closeupPopup__pic');
const closeupPopup = document.querySelector('.closeupPopup');
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

const getCard = function(data) {
    const cardItem = template.content.cloneNode(true);   
    cardItem.querySelector('.gallery__pic').src = data.link;
    cardItem.querySelector('.gallery__text').innerText = data.name;
    cardItem.querySelector('.gallery__like-button').addEventListener('click', (evt) => {         
        if(evt.target.classList.contains('gallery__like-button')){
         evt.target.classList.toggle('gallery__like-button_active');       
        }
    })
    cardItem.querySelector('.gallery__delete-button-pic').addEventListener('click', (evt) => {
        if(evt.target.classList.contains('gallery__delete-button-pic')){        
         evt.target.closest('.gallery__item').remove();
        }
    })
    cardItem.querySelector('.gallery__pic').addEventListener('click', (evt) => {
        if(evt.target.classList.contains('gallery__pic')){        
         popupToggleHandler(closeupPopup);
         closeupPopupPic.src = evt.target.closest('.gallery__pic').src
         closeupPopupTxt.textContent = evt.target.closest('.gallery__item').textContent    
    }   
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

profile.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('profile__edit-button-pic') || evt.target.classList.contains('profile__edit-button')){
        popupToggleHandler(popup);
        popupName.value = name.textContent;
        popupProfession.value = profession.textContent;
    }
});

popupCloseButton.addEventListener('click', () => {
    popupToggleHandler(popup);
});

popup.addEventListener('submit', (evt) => {
evt.preventDefault();
popupToggleHandler(popup);
name.textContent = popupName.value;
profession.textContent = popupProfession.value;
});

popupAddButton.addEventListener('click', bindTest);

addButton.addEventListener('click', () => {
    popupToggleHandler(addPopup)
});

addPopupClose.addEventListener('click', () => {
    popupToggleHandler(addPopup)
});

closeupPopupCloseBtn.addEventListener('click', () => {
    popupToggleHandler(closeupPopup)
})

