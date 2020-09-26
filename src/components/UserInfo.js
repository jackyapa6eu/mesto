export default class UserInfo {
  constructor({displayNameSelector, professionSelector}) {
    this._displayName = document.querySelector(displayNameSelector);
    this._profession = document.querySelector(professionSelector);
  }
  getUserInfo() {
    const userInfo = {
      displayName: this._displayName.textContent,
      profession: this._profession.textContent
    }
    return userInfo
  }
  setUserInfo({displayname, profession}) {
    this._displayName.textContent = displayname;
    this._profession.textContent = profession;
  }
}