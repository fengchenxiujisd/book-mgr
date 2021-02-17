import axios from 'axios';

export const register = (account, password) => {
    axios.post("http://127.0.0.1:3000/auth/register", {
        account,
        password,
    })
}

export const login = (account, password) => {
    axios.post("http://127.0.0.1:3000/auth/login", {
        account,
        password,
    })
}
