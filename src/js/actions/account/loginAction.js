import fetch from 'isomorphic-fetch'
import ENV_VARS from '../../../../config/ENV_VARS'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

const LOGIN_URL = "/authentication/users"

/**
 * Creates a success login action signaling that the login was successful. The api key is returned.
 * 
 * @param key The REST api key used to authenticate requests.
 * @returns {{type: string, key: string}}
 */
export function successLogin(key) {
    return {
        type: LOGIN_SUCCESS,
        key
    }
}

/**
 * Creates an error login action signaling that the login was not successful. An error message is returned.
 * 
 * @param error The error message about the failed login.
 * @returns {{type: string, error: string}}
 */
export function errorLogin(error) {
    return {
        type: LOGIN_ERROR,
        error
    }
}

/**
 * Creates a login request action with the given username and password
 *
 * @param login The user login information.
 * @param password The password to login with.
 * @returns {function()}
 */
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