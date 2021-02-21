
import {Popup} from './Popup.js'
export class ConfirmationPopup extends Popup{
    constructor(/* {submitCallback},*/ popupSelector){
        super(popupSelector);
      //  this._submitCallback = submitCallback;
    }

    

    setEventListeners(){
        
        this._element.addEventListener('submit', (e) => {
            e.preventDefault();
            this.callback(this.data)
            this.close()
        }, {once: 1})
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