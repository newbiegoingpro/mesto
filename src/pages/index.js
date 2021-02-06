import {profile,      
    popupOpenButton   ,
    popupEdit,     
    popupContainer,     
    popupCloseButton , 
    popupName   ,
    popupProfession  , 
    popupSaveButton  , 
    name   ,
    profession   ,
    addButton    ,  
    popupAdd     , 
    addPopupOpenButton   ,   
    addPopupClose    ,  
    popupAddPlace  ,   
    popupAddLink   ,   
    popupAddSaveButton   ,   
    template,      
    gallery,      
    galleryItem  , 
    closeupPopupCloseBtn ,     
    closeupPopupTxt  ,    
    closeupPopupPic,      
    closeupPopup   ,   
    validityConfig , 
    initialCards} from '../script/const.js';
import {Card} from '../script/Card.js';
import {UserInfo} from '../script/UserInfo.js';
import {FormValidator} from '../script/FormValidator.js';
import {Popup} from '../script/Popup.js';
import {PopupWithForm} from '../script/PopupWithForm.js';
import {PopupWithImage} from '../script/PopupWithImage.js';
import {Section} from '../script/Section.js';
import './index.css';

function openCloseupPopup(cardItem) {
   const cardPopup = new PopupWithImage({imageSelector:'.closeupPopup__pic',
    textSelector:'.closeupPopup__text', popupSelector:'.closeupPopup'})
    cardPopup.open(cardItem)
    cardPopup.setEventListeners()
} 

function newCard(data){
    const card = new Card(
       {handleCardClick: openCloseupPopup, 
        name: data.name, link: data.link }, '.template').generateCard(data);
    gallerySection.addItem(card)
}

const editFormValidated = new FormValidator(validityConfig, popupEdit); 
const addFormValidated = new FormValidator(validityConfig, popupAdd); 
editFormValidated.enableValidation(); 
addFormValidated.enableValidation(); 

const gallerySection = new Section({data: initialCards, renderer: newCard}
, '.gallery')
gallerySection.renderItems()

const userInfo = new UserInfo({nameSelector: '.profile__name', professionSelector: '.profile__profession'});

popupOpenButton.addEventListener('click', () => {
    popupName.value = userInfo.getInfo().name
    popupProfession.value = userInfo.getInfo().profession
    const editPopup = new PopupWithForm({submitCallback: (data) => {
        userInfo.setInfo(data)
    }}, '.popup-edit')
    editPopup.open()
    editPopup.setEventListeners();
    editFormValidated.toggleButtonState(popupSaveButton, true); 
})


addPopupOpenButton.addEventListener('click', () => {
    const addPopup = new PopupWithForm({submitCallback : newCard  
    }, '.popup-add')
    addPopup.open();
    addPopup.setEventListeners();    
    addFormValidated.toggleButtonState(popupAddSaveButton, false); 
})



