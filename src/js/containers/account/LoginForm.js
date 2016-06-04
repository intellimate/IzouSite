import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { login }  from '../../actions/account/loginAction'
import ResponseField from '../../components/ResponseField'


let LoginForm = ({response, dispatch}) => {
    LoginForm.propTypes = {
        response: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    }
    
    let username, password

    let handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(username.value, password.value))
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" ref={node => { username = node }} />
                <input type="password" ref={node => { password = node }} />
                <input type="submit" value="Login" />
            </form>
            <ResponseField content={response} />
        </div>
    )
}

LoginForm = connect()(LoginForm)

export default LoginForm