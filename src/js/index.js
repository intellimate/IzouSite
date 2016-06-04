import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import LoginForm from './containers/LoginForm'
import loginReducer from './reducers/loginReducers'

let store = createStore(loginReducer);

render(
    <Provider store={store}>
        <LoginForm />
    </Provider>,
    document.getElementById('root')
);