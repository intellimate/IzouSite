import fetch from 'isomorphic-fetch'
import ENV_VARS from '../../../../config/ENV_VARS'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

const LOGIN_URL = "/authentication/users"

export function successLogin(json) {
    return {
        type: LOGIN_SUCCESS,
        response: json
    }
}

export function errorLogin(json) {
    return {
        type: LOGIN_ERROR,
        response: json
    }
}

export function login(login, password) {
    return dispatch => {
        return fetch(ENV_VARS.API_URL + LOGIN_URL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: login,
                password: password
            })
        })
        .then(response => {
            if (response.status === 200) {
                response.json().then(json => dispatch(successLogin(json)))
            } else {
                response.json().then(json => dispatch(errorLogin(json)))
            }
        })
    }
}