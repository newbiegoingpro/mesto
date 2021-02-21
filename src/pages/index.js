import {profile,      
    popupOpenButton,
    popupEdit,     
    popupContainer,     
    popupCloseButton, 
    popupName,
    popupProfession, 
    popupSaveButton, 
    name,
    profession,
    addButton,  
    popupAdd, 
    addPopupOpenButton,   
    addPopupClose,  
    popupAddPlace,   
    popupAddLink,   
    popupAddSaveButton,   
    template,      
    gallery,      
    galleryItem, 
    closeupPopupCloseBtn ,     
    closeupPopupTxt,    
    closeupPopupPic,      
    closeupPopup,   
    validityConfig, 
    initialCards,
    avatarButton,
    avatarPopup,
    /*deletePopup,*/
    likeCounter,
    apiConfig,
    avatar} from '../utils/const.js';
import {Card} from '../components/Card.js';
import {UserInfo} from '../components/UserInfo.js';
import {FormValidator} from '../components/FormValidator.js';
import {ConfirmationPopup} from '../components/ConfirmationPopup.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {Section} from '../components/Section.js';
import {Api} from '../components/Api.js';
import './index.css';
let myId = null;
let cardId = null;
let likes = null;

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20',
    headers: {
    "Content-Type": "application/json",
    "Authorization": "5eba1b30-a022-4f10-bfa8-56b458d9d188"
    }
  });

api.getUserInfo()
    .then((data) => {
        userInfo.setInfo(data);
        myId = data._id   
        console.log(myId)
    })
    .catch(err => console.log(err));

const gallerySection = new Section({renderer: newCard}, '.gallery')    

api.getInitialCards()
    .then((data) => {
        data.map((item) => {
           return  
        }
           )
        gallerySection.renderItems(data)    
    console.log(data)
    
    })
    .catch(err => console.log(err));
    
const cardPopup = new PopupWithImage({imageSelector:'.closeupPopup__pic',
    textSelector:'.closeupPopup__text', popupSelector:'.closeupPopup'})
cardPopup.setEventListeners();


function openCloseupPopup(cardItem) {   
    cardPopup.open(cardItem);
} 

function callbackStatement(data){
    deletePopup.setSubmitCallback(()=>{api.removeCard(data)
    .then((data) => {   
        console.log(data)})
    .catch(err => console.log(err))
    .finally(deletePopup.close())})
    
}

const deletePopup = new ConfirmationPopup(/*{submitCallback: callbackStatement},*/'.popup-delete');
deletePopup.setEventListeners()
/*function deletePopupInstance(data){   
    
    deletePopup.open(data);
}*/


function newCard(data){
    const card = new Card(
            {handleCardClick: openCloseupPopup, 
             handleDeleteBasketClick: (data) => {
                deletePopup.open();
                
               deletePopup.setSubmitCallback(() => {
                api.removeCard(data)
                .then((data) => {   
                    card.handleDeleteButton()})
                .catch(err => console.log(err))
                
                })  
                    
        },  handleLikeClick: (data, likes) => {
              api.likeCard(data)
                .then((data) => {
                    card.updateLikeCounter(data)
                    })
                .catch(err => console.log(err))
        },  handleRemoveLikeClick: (data, likes) => {
              api.removeLike(data)
                .then((data) => {
                    card.updateLikeCounter(data)
                    })
                .catch(err => console.log(err))
        },
            data}, myId, '.template', api)
         
    gallerySection.addItem(card.generateCard(data))    
       
}

const avatarFormValidated = new FormValidator(validityConfig, avatarPopup);
const editFormValidated = new FormValidator(validityConfig, popupEdit); 
const addFormValidated = new FormValidator(validityConfig, popupAdd);
avatarFormValidated.enableValidation(); 
editFormValidated.enableValidation(); 
addFormValidated.enableValidation(); 

const userInfo = new UserInfo({nameSelector: '.profile__name', professionSelector: '.profile__profession', avatarSelector: '.profile__avatar'});

const editPopup = new PopupWithForm({submitCallback: (data) => {
    api.updateUserInfo(JSON.stringify(data))
    .then((data) => userInfo.setInfo(data))
    .catch(err => console.log(err))
    .finally(editPopup.isLoading(false))
}}, '.popup-edit')

popupOpenButton.addEventListener('click', () => {
    popupName.value = userInfo.getInfo().name
    popupProfession.value = userInfo.getInfo().profession 
    editPopup.open()
    editPopup.setEventListeners();
    editFormValidated.toggleButtonState(popupSaveButton, true); 
})

const addPopup = new PopupWithForm({submitCallback: (data)=>{
    api.addNewCard(JSON.stringify(data))
    .then(data => {
        newCard(data)})
    .catch(err => console.log(err))
    .finally(addPopup.isLoading(false))
}  
}, '.popup-add')

addPopupOpenButton.addEventListener('click', () => { 
    addPopup.open();
    addPopup.setEventListeners();    
    addFormValidated.toggleButtonState(popupAddSaveButton, false); 
})

avatarButton.addEventListener('click', () => {
const avatarPopup = new PopupWithForm({submitCallback: (data) => {
    api.updateUserPhoto(JSON.stringify(data))
        .then((data) => {
            userInfo.setInfo(data)
            console.log(data)})
        .catch(err => console.log(err))  
        .finally(avatarPopup.isLoading(false))  
}}, '.popup-avatar')
avatarPopup.open();
avatarPopup.setEventListeners();
})

