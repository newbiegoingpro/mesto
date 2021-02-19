
export class Card {
    constructor({handleCardClick, handleDeleteBasketClick, handleLikeClick, handleRemoveLikeClick, data}, myId, cardSelector, api) {
     /* debugger*/
      this._alt = data.name;
      this._name = data.name;
      this._link = data.link;
      this._ownerId = data.owner._id;
      this._myId = myId;
      this._id = data._id;
      this._likes = data.likes;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._handleDeleteBasketClick = handleDeleteBasketClick;
      this._handleLikeClick = handleLikeClick;
      this._handleRemoveLikeClick = handleRemoveLikeClick
      this._api = api;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(
            this._cardSelector
        )
        .content
        .querySelector('.gallery__item')
        .cloneNode(true);  
      return cardElement;
    }

    generateCard(data){
      this._element = this._getTemplate();
      this._setEventListeners()
      const thisPic = this._element.querySelector('.gallery__pic');
      const thisText = this._element.querySelector('.gallery__text');
      this._element.querySelector('.gallery__like-counter').textContent = this._likes.length;
      this._likes.forEach(element => {
        if(element._id === this._myId){
         this._element.querySelector('.gallery__like-button').classList.add('gallery__like-button_active')
        } })
      if(this._ownerId !== this._myId){
        this._element.querySelector('.gallery__delete-button').style.visibility = 'hidden'}
      thisPic.src = data['link'];
      thisPic.alt = data['name'];
      thisText.textContent = data['name'];
      return this._element;
    }
     
    

    handleDeleteButton(){
      this._element.querySelector('.gallery__delete-button').closest('.gallery__item').remove();
    }

    addLikeButton(){
      this._element.querySelector('.gallery__like-button').classList.add('gallery__like-button_active')
    }

    removeLikeButton(){
      this._element.querySelector('.gallery__like-button').classList.remove('gallery__like-button_active')
    }

    increaseLikeCounter(){
      this._element.querySelector('.gallery__like-counter').textContent =  Number(this._element.querySelector('.gallery__like-counter').textContent) + 1
    }

    decreaseLikeCounter(){
      this._element.querySelector('.gallery__like-counter').textContent = this._element.querySelector('.gallery__like-counter').textContent - 1
    }

    _setEventListeners(){
        this._element.querySelector('.gallery__pic').addEventListener('click', () => { 
          this._handleCardClick({name: this._name, link: this._link})
        })
        this._element.querySelector('.gallery__delete-button').addEventListener('click', () => {
            this._handleDeleteBasketClick(this._id);
            
          })
        this._element.querySelector('.gallery__like-button').addEventListener('click', (e) => {
          if(e.target.classList.contains('gallery__like-button_active')){
            this._element.querySelector('.gallery__like-button').classList.remove('gallery__like-button_active')
            this._handleRemoveLikeClick(this._id, this._likes)
            this.decreaseLikeCounter() 
          } else if(!(e.target.classList.contains('gallery__like-button_active'))) {
            this._element.querySelector('.gallery__like-button').classList.add('gallery__like-button_active')
            this._handleLikeClick(this._id, this._likes);
            this.increaseLikeCounter() 
           }
            
        })
      // this._element.querySelector('.gallery__like-button').querySelector('.gallery__like-button_active').addEventListener('click', () => {
       //     ;
        //    /*this.removeLikeButton();*/
          
       // })
        }
}

