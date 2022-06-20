import { BASE_URL } from './constants'

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _handleResponse(res) {
        if (res.ok) return res.json();
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    register({ name, email, password }) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, email, password })
        })
            .then((res) => this._handleResponse(res));
    }

    authorize({ email, password }) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, password })
        })
            .then((res) => this._handleResponse(res));
    }

    getUserInfo(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`,
            }
        })
            .then((res) => this._handleResponse(res));
    }

    patchUserInfo(data, token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            })
        })
            .then((res) => this._handleResponse(res));
    }

    getMovies(token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`,
            },
        })
            .then((res) => this._handleResponse(res));
    }

    postNewCard(movie, token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(movie),
        })
            .then((res) => this._handleResponse(res));
    }

    deleteMovie(movieID) {
        return fetch(`${this._baseUrl}/movies/${movieID}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then((res) => this._handleResponse(res));
    }
}


const api = new Api({
    baseUrl: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;