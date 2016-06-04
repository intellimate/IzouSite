import { combineReducers } from 'redux'
import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/account/loginAction'
import { NEW_ACCOUNT_SUCCESS, NEW_ACCOUNT_ERROR } from '../actions/account/createAccountAction'

const initialState = {
    response: ''
};

const createAccount = (state = initialState, action) => {
    switch (action.type) {
        case NEW_ACCOUNT_SUCCESS:
            return {
                response: "success - user id: " + action.response.id
            }

        case NEW_ACCOUNT_ERROR:
            return {
                response: "error - code: " + action.response.code + " - detail: " + action.response.detail
            }

        default:
            return {
                response: "nothing received"
            }
    }
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                response: "success - token: " + action.response.token
            }

        case LOGIN_ERROR:
            console.log("sfd")
            return {
                response: "error - code: " + action.response.code + " - detail: " + action.response.detail
            }

        default:
            return state;
    }
};

const loginReducers = combineReducers({
    createAccount,
    login
})

export default loginReducers