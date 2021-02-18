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
    avatar} from '../script/const.js';
import {Card} from '../script/Card.js';
import {UserInfo} from '../script/UserInfo.js';
import {FormValidator} from '../script/FormValidator.js';
import {Popup} from '../script/Popup.js';
import {PopupWithForm} from '../script/PopupWithForm.js';
import {PopupWithImage} from '../script/PopupWithImage.js';
import {Section} from '../script/Section.js';
import {Api} from '../script/Api.js';
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
        name.textContent = data.name;
        profession.textContent = data.about;
        avatar.src = data.avatar;
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



function openCloseupPopup(cardItem) {   
    cardPopup.open(cardItem);
    cardPopup.setEventListeners();
} 

function newCard(data){
    const card = new Card(
        {handleCardClick: openCloseupPopup, 
            handleDeleteBasketClick: (data) => {
                console.log(data)
                const deletePopup = new Popup('.popup-delete');
                deletePopup.open();
                deletePopup.setEventListeners();
                document.querySelector('.popup-delete').addEventListener('submit' , (e) => {
                    e.preventDefault();
                    api.removeCard(data)
                        .then(data => console.log(data))
                        .catch(err => console.log(err))
                    card.handleDeleteButton()
                    deletePopup.close();
                })
        },  handleLikeClick: (data, likes) => {
              api.likeCard(data)
                .then((data) => {
                    console/log()
                    /*card.increaseLikeCounter(likes)*/
                    console.log(data)})
                .catch(err => console.log(err))
        },  handleRemoveLikeClick: (data, likes) => {
              api.removeLike(data)
                .then((data) =>
                    {
                    /*card.decreaseLikeCounter(likes)*/
                    console.log(data)})
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

const userInfo = new UserInfo({nameSelector: '.profile__name', professionSelector: '.profile__profession'});

popupOpenButton.addEventListener('click', () => {
    popupName.value = userInfo.getInfo().name
    popupProfession.value = userInfo.getInfo().profession
    const editPopup = new PopupWithForm({submitCallback: (data) => {
        api.updateUserInfo(JSON.stringify(data))
        .then((data) => userInfo.setInfo(data))
        .catch(err => console.log(err))
        .finally(editPopup.isLoading(false))
    }}, '.popup-edit')
    editPopup.open()
    editPopup.setEventListeners();
    editFormValidated.toggleButtonState(popupSaveButton, true); 
})

addPopupOpenButton.addEventListener('click', () => {
    const addPopup = new PopupWithForm({submitCallback: (data)=>{
        api.addNewCard(JSON.stringify(data))
        .then(data => {
            newCard(data)})
        .catch(err => console.log(err))
        .finally(addPopup.isLoading(false))
    }  
    }, '.popup-add')
    
    addPopup.open();
    addPopup.setEventListeners();    
    addFormValidated.toggleButtonState(popupAddSaveButton, false); 
})

avatarButton.addEventListener('click', () => {
const avatarPopup = new PopupWithForm({submitCallback: (data) => {
    api.updateUserPhoto(JSON.stringify(data))
        .then((data) => {
            avatar.src = data.avatar
            console.log(data)})
        .catch(err => console.log(err))  
        .finally(avatarPopup.isLoading(false))  
}}, '.popup-avatar')
avatarPopup.open();
avatarPopup.setEventListeners();
})

