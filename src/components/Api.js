export default class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getInitialCards() {
    return this._fetcher("/cards", "GET");
  }

  getUserData() {
    return this._fetcher("/users/me", "GET");
  }

  updateUserData(newUserData) {
    return this._fetcher("/users/me", "PATCH", newUserData);
  }

  likeCard(cardId) {
    return this._fetcher(`/cards/likes/${cardId}`, "PUT");
  }

  unLikeCard(cardId) {
    return this._fetcher(`/cards/likes/${cardId}`, "DELETE");
  }

  uploadNewCard(card) {
    return this._fetcher("/cards", "POST", card);
  }

  deleteCard(cardId) {
    return this._fetcher(`/cards/${cardId}`, "DELETE");
  }

  updateAvatar(newAvatar) {
    return this._fetcher("/users/me/avatar", "PATCH", newAvatar);
  }

  _fetcher(path, method, body) {
    const options = {
      method: method,
      headers: this._headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    return fetch(`${this._baseUrl}${path}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}
