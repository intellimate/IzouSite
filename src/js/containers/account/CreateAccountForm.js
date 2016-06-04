import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { createAccount }  from '../../actions/account/createAccountAction'

let CreateAccountForm = ({ dispatch }) => {
    CreateAccountForm.propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    let username, password1, password2, email

    let handleSubmit = (e) => {
        e.preventDefault()
        if (password1.value === password2.value) {
            dispatch(createAccount(username.value, password1.value, email.value))
        } else {
            console.log("passwords not equal")
        }
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" defaultValue="Username" ref={node => { username = node }} />
                <input type="text" defaultValue="Password" ref={node => { password1 = node }} />
                <input type="text" defaultValue="Password Again" ref={node => { password2 = node }} />
                <input type="text" defaultValue="E-Mail" ref={node => { email = node }} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

CreateAccountForm = connect()(CreateAccountForm)

export default CreateAccountForm