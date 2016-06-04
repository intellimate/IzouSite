import { combineReducers } from 'redux'
import { NEW_ACCOUNT_SUCCESS, NEW_ACCOUNT_ERROR } from '../../actions/account/createAccountAction'

const initialState = {
    username: '',
    password: '',
    email: ''
};

export const createAccount = (state = initialState, action) => {
    switch (action.type) {
        case NEW_ACCOUNT_SUCCESS:
            return state;

        case NEW_ACCOUNT_ERROR:
            return state;

        default:
            return state;
    }
};

const createAccountReducers = combineReducers({
    createAccount
})

export default createAccountReducers