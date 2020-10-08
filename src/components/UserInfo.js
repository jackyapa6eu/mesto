export default class UserInfo {
  constructor({displayNameSelector, professionSelector, avatarImageSelector}) {
    this._displayName = document.querySelector(displayNameSelector);
    this._profession = document.querySelector(professionSelector);
    this._avatarImage = document.querySelector(avatarImageSelector);
  }
  getUserInfo() {
    const userInfo = {
      displayName: this._displayName.textContent,
      profession: this._profession.textContent
    }
    return userInfo
  }
  getUserId() {
    return this.myId
  }
  setUserInfo(userData) {
    this.myId = userData._id;
    this._displayName.textContent = userData.name;
    this._profession.textContent = userData.about;
    this.setUserAvatar(userData);
  }
  setUserAvatar(userData) {
    this._avatarImage.src = userData.avatar;
  }
}