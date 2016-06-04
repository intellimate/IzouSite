export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'

export const NEW_ACCOUNT_REQUEST = 'NEW_ACCOUNT_REQUEST'
export const NEW_ACCOUNT_SUCCESS = 'NEW_ACCOUNT_SUCCESS'
export const NEW_ACCOUNT_ERROR = 'NEW_ACCOUNT_ERROR'

/**
 * Creates a login request action with the given username and password
 *
 * @param login The user login information.
 * @param password The password to login with.
 * @returns {{type: string, login: string, password: string}}
 */
export function requestLogin(login, password) {
    return {
        type: LOGIN_REQUEST,
        username: login,
        password: password
    }
}

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