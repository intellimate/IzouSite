import fetch from 'isomorphic-fetch'
import ENV_VARS from '../../../../config/ENV_VARS'

export const NEW_ACCOUNT_SUCCESS = 'NEW_ACCOUNT_SUCCESS'
export const NEW_ACCOUNT_ERROR = 'NEW_ACCOUNT_ERROR'

const LOGIN_URL = "/users"


export function successCreateAccount(json) {
    return {
        type: NEW_ACCOUNT_SUCCESS,
        json
    }
}

export function errorCreateAccount(json) {
    return {
        type: NEW_ACCOUNT_ERROR,
        json
    }
}

export function createAccount(username, password, email) {
    return dispatch => {
        return fetch(ENV_VARS.API_URL + LOGIN_URL, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        .then(response => {
            if (response.status === 200) {
                response.json().then(json => dispatch(successCreateAccount(json)))
            } else {
                response.json().then(json => dispatch(errorCreateAccount(json)))
            }
        })
    }
}