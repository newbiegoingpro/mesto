export class Section{
    constructor({renderer}, containerSelector){
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
        
    }
    
    renderItems(data){
      data.forEach(item => {
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
