import { combineReducers } from 'redux'
import { LOGIN_SUCCESS, LOGIN_ERROR } from '../../actions/account/loginAction'

const initialState = {
    username: '',
    password: ''
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return state;

        case LOGIN_ERROR:
            return state;

        default:
            return state;
    }
};

const loginReducers = combineReducers({
    login
})

export default loginReducers