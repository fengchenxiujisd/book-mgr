import axios from 'axios';

export const register = (account, password, inviteCode) => {
    return axios.post("http://127.0.0.1:3000/auth/register", {
        account,
        password,
        inviteCode,
    })
}

export const login = (account, password) => {
    return axios.post("http://127.0.0.1:3000/auth/login", {
        account,
        password,
    })
}
