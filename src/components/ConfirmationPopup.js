
import {Popup} from './Popup.js'
export class ConfirmationPopup extends Popup{
    constructor(popupSelector){
        super(popupSelector);
      
    }
    setEventListeners(){
        
        this._element.addEventListener('submit', (e) => {
            e.preventDefault();
            this.callback(this.data)
            this.close()
        })
        super.setEventListeners()
    }

    setSubmitCallback(callback){
        this.callback = callback;
        
    }
    open(data){
        this.data = data;
        super.open();
    }
}