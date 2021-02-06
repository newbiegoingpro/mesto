
export class Card {
    constructor({handleCardClick, name, link}, cardSelector) {
      this._alt = name;
      this._name = name;
      this._link = link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick
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
      thisPic.src = data['link'];
      thisPic.alt = data['name'];
      thisText.textContent = data['name'];
      return this._element;
    }

    _handleDeleteButton(){
      this._element.querySelector('.gallery__delete-button').closest('.gallery__item').remove();
    }

    _handleLikeButton(){
      this._element.querySelector('.gallery__like-button').classList.toggle('gallery__like-button_active')
    }
    _setEventListeners(){
        this._element.querySelector('.gallery__pic').addEventListener('click', () => {
          
          this._handleCardClick({name: this._name, link: this._link})
        })
        this._element.querySelector('.gallery__delete-button').addEventListener('click', () => {
          this._handleDeleteButton()
        })
        this._element.querySelector('.gallery__like-button').addEventListener('click', () => {
          this._handleLikeButton()
        })
        }
}

