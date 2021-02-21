import { avatar } from "./const";

export class UserInfo{
    constructor({ nameSelector, professionSelector, avatarSelector }){
        this._name = document.querySelector(nameSelector);
        this._profession = document.querySelector(professionSelector);
        this._avatar = document.querySelector(avatarSelector);
    }
    getInfo(){
        const infoObj = {
            name: this._name.textContent,
            profession: this._profession.textContent,
            avatar: this._avatar.src
        };
        return infoObj;
    }
    setInfo(data){
        this._name.textContent = data['name'];
        this._profession.textContent = data['about']
        this._avatar.src = data['avatar']
    }
}