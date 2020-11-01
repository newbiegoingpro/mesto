let addButton = document.querySelector('.profile__add-button');

let addPopup = document.querySelector('.popup-add');

let addPopupClose = document.querySelector('.popup-add__close-button');

let popupAddPlace = document.querySelector('.popup__input_place');

let popupAddLink = document.querySelector('.popup__input_link');

let popupAddButton = document.querySelector('.popup-add__save-button');

let template = document.querySelector('.template');



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

//console.log(initialCards)

const gallery = document.querySelector('.gallery');





const getCard = function(data) {
    
   // console.log(data)
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

function popupAddToggle(){
    addPopup.classList.toggle('popup_opened');

}



const bindTest = () => {
    const item = getCard( {
    name: popupAddPlace.value,
    link: popupAddLink.value
})
popupAddToggle()
gallery.prepend(item)
console.log(item)



}

popupAddButton.addEventListener('click', bindTest)





addButton.addEventListener('click', popupAddToggle);

addPopupClose.addEventListener('click', popupAddToggle);

render();

getCard(render);
