
export class UserInfo{
    constructor({ nameSelector, professionSelector }){
        this._name = document.querySelector(nameSelector);
        this._profession = document.querySelector(professionSelector);
        
    }
    getInfo(){
        const infoObj = {
            name: this._name.textContent,
            profession: this._profession.textContent
        };
        return infoObj;
    }
    setInfo(data){
        this._name.textContent = data['name-Input'];
        this._profession.textContent = data['profession-Input']
        
    }
}