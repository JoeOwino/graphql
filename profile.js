import { user } from './model.js';

const login = document.getElementById('login');

export function getProfile() {
    if (login && user && user.login && user.login !== 'Guest') {
        login.innerText = user.login;
    } else {
        login.innerText = 'Guest';
    }
}

