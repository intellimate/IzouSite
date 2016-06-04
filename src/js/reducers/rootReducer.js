import { combineReducers } from 'redux'
import createAccountReducers from './account/loginReducers'
import loginReducers from './account/loginReducers'

const rootReducer = combineReducers({
    createAccountReducers,
    loginReducers
})

export default rootReducer