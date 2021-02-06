export class Section{
    constructor({data, renderer}, containerSelector){
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
        this._initialArr = data;
    }
    
    renderItems(){
        this._initialArr.forEach(item => {
            this._renderer(item);
        })
    }
    addItem(element, isArray) { 
        if (isArray) { 
          this._container.append(element); 
        } else { 
          this._container.prepend(element); 
        } 
      } 
}
