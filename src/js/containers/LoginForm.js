import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { requestLogin }  from '../actions/loginAction'

let LoginForm = ({ dispatch }) => {
    LoginForm.propTypes = {
        dispatch: PropTypes.func.isRequired
    }
    
    let username, password

    let handleSubmit = (e) => {
        e.preventDefault()
        dispatch(requestLogin(username.value, password.value))
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" ref={node => { username = node }} />
                <input type="password" ref={node => { password = node }} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

LoginForm = connect()(LoginForm)

export default LoginForm