class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._headers = options.headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res)
  }

  getSearchId() {
    return fetch(`${this._baseUrl}search`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse)
  }

  getTickets(searchId) {
    return fetch(`${this._baseUrl}tickets?searchId=${searchId}`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse)
  }
}

const api = new Api({
  baseUrl: 'https://aviasales-test-api.kata.academy/',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  },
})

export default api
