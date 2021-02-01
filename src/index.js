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
    initialCards} from './script/const.js';
import {Card} from './script/Card.js';
import {UserInfo} from './script/UserInfo.js';
import {FormValidator} from './script/FormValidator.js';
import {Popup} from './script/Popup.js';
import {PopupWithForm} from './script/PopupWithForm.js';
import {PopupWithImage} from './script/PopupWithImage.js';
import {Section} from './script/Section.js';
import './index.css';
const gallerySection = new Section({data: initialCards, renderer: (item) => {
    console.log(item)
      const card = new Card({handleCardClick: () => {
          const cardPopup = new PopupWithImage({imageSelector:'.closeupPopup__pic',
           textSelector:'.closeupPopup__text', popupSelector:'.closeupPopup'})
           
          cardPopup.open(item)
          cardPopup.setEventListeners()
      }},item, '.template');
      gallerySection.addItem(card.generateCard())
}}, '.gallery')
gallerySection.renderItems()

popupOpenButton.addEventListener('click', () => {
    const userInfo = new UserInfo({nameSelector: '.profile__name', professionSelector: '.profile__profession'})
    popupName.value = userInfo.getInfo().name
    popupProfession.value = userInfo.getInfo().profession
    const editPopup = new PopupWithForm({submitCallback: (data) => {
        const newUsersInfo = new UserInfo ({nameSelector: '.profile__name', professionSelector: '.profile__profession'})
        newUsersInfo.setInfo(data)
    }}, '.popup-edit')
    editPopup.open()
    editPopup.setEventListeners();
})

addPopupOpenButton.addEventListener('click', () => {
    const addPopup = new PopupWithForm({submitCallback : (data) => {
        const newCard = new Card({handleCardClick : () => {
            
            const newCardCloseupPopup = new PopupWithImage({imageSelector:'.closeupPopup__pic',
            textSelector:'.closeupPopup__text', popupSelector:'.closeupPopup'})
            newCardCloseupPopup.open(data)
            newCardCloseupPopup.setEventListeners()
            console.log(data)
        }}, data, '.template')
        gallery.prepend(newCard.generateCard())
        document.querySelector('.gallery__pic').src = data['link-Input'];
        document.querySelector('.gallery__pic').alt = data['place-Input'];
        document.querySelector('.gallery__text').textContent = data['place-Input'];
    }}, '.popup-add')
    addPopup.open();
    addPopup.setEventListeners()
});

const editFormValidated = new FormValidator(validityConfig, popupEdit); 
 
editFormValidated.enableValidation(); 
 
const addFormValidated = new FormValidator(validityConfig, popupAdd); 
 
addFormValidated.enableValidation(); 