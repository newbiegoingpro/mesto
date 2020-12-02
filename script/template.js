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

function popupToggle(){ 
    
    if (popup.classList.contains('popup_opened')){
    popupName.value = name.textContent
    popupProfession.value = profession.textContent
}
};

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

const getCard = function(data) {
    let cardItem = template.content.cloneNode(true);
    
    console.log(cardItem);
    cardItem.querySelector('.gallery__pic').src = data.link;
    cardItem.querySelector('.gallery__text').innerText = data.name;    
    return cardItem;
  };

function render() {
    const cardsInitial = initialCards.map((element) =>
        getCard(element)
        );
        gallery.append(...cardsInitial)    
    };

render();

getCard(render);

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

popupAddButton.addEventListener('click', bindTest);

addButton.addEventListener('click', () => {
    popupToggleHandler(addPopup)
});

addPopupClose.addEventListener('click', () => {
    popupToggleHandler(addPopup)
});

const closeupPopupPic = document.querySelector('.closeupPopup__pic');

const closeupPopup = document.querySelector('.closeupPopup');

gallery.addEventListener('click', (evt) => {         
            if(evt.target.classList.contains('gallery__like-button')){
             evt.target.classList.toggle('gallery__like-button_active');       
            }
        })

gallery.addEventListener('click', (evt) => {
    
    if(evt.target.classList.contains('gallery__delete-button-pic')){
        console.log(evt.target)
        evt.target.closest('.gallery__item').remove();
    }
    else if(evt.target.classList.contains('gallery__pic')){
            
            popupToggleHandler(closeupPopup);
            closeupPopupPic.src = evt.target.closest('.gallery__pic').src
            closeupPopupTxt.textContent = evt.target.closest('.gallery__item').textContent
        
    }
})


closeupPopupCloseBtn.addEventListener('click', () => {
    popupToggleHandler(closeupPopup)
})



         







