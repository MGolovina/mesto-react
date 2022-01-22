export class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }
  
  _handleServerResponse(res) {
    if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }
  
  // postCard(data) {
  //   return fetch(`${this._url}/cards`, {
  //   method: 'POST',
  //   headers: this._headers,
  //   body: JSON.stringify({
  //     name: data.name,
  //     link: data.link,
  //   })
  //   })
  //   .then(this._handleServerResponse)
  // }  
   
  // deleteCard(data) {
  //   return fetch(`${this._url}/cards/${data._id}`, {
  //   method: 'DELETE',
  //   headers: this._headers
  //   })
  //   .then(this._handleServerResponse)
  // }

  // setLike(data) {
  //   return fetch(`${this._url}/cards/likes/${data._id}`, {
  //   method: 'PUT',
  //   headers: this._headers,
  //   })
  //   .then(this._handleServerResponse)
  // }
  
  
  // deleteLike(data) {
  //   return fetch(`${this._url}/cards/likes/${data._id}`, {
  //   method: 'DELETE',
  //   headers: this._headers,
  //   })
  //   .then(this._handleServerResponse)
  // }

  
  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      about: data.about
    })
    })
    .then(this._handleServerResponse)
  }

  setUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      avatar: data.avatar
    })
    })
    .then(this._handleServerResponse)
  }
  
  getCards() {
    return fetch(`${this._url}/cards`, {
    method: 'GET',
    headers: this._headers
    })
    .then(this._handleServerResponse)
  }

  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }
  
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
    method: 'GET',
    headers: this._headers
    })
    .then(this._handleServerResponse)
  }
  }
  
  const api = new Api ({
  url: "https://mesto.nomoreparties.co/v1/cohort-32",
  headers: {
    authorization: 'dfec78ce-4ea7-4fc5-a44a-505604bfdc47',
  'Content-Type': 'application/json'
  }
  });
  export default api;