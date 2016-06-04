import { combineReducers } from 'redux'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/loginAction'

const initialState = {
    username: '',
    logo: ''
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            if (action.username === "jundl77" && action.password === "test")
                /* eslint no-console: 0 */
                console.log("successful login with: " + action.username)
            else
                /* eslint no-console: 0 */
                console.log("error logging in, username :" + action.username + " password: " + action.password)
            return {};

        case LOGIN_SUCCESS:
            return state;

        case LOGIN_ERROR:
            return state;

        default:
            return state;
    }
};

const loginReducer = combineReducers({
    login
});

export default loginReducer;