import React from 'react';
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {

    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <Field placeholder='Email' name="email" component="input" type="email"/>
            </div>
            <div>
                <label htmlFor="Password">You Password</label>
                <Field placeholder='Password' name="password" component="input" type="text"/>
            </div>
            <div>
                <Field component='input' name="rememberMe" type='checkbox'/> remember me
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)


export default ReduxLoginForm;