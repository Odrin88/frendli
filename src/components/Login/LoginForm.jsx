import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControl/FormsControl";
import {maxLengthCreator, minLengthCreator, required, validEmail} from "../../utils/Validators/validators";
import classes from './Login.module.css'

const maxLength = maxLengthCreator(50);
const minLength = minLengthCreator(6);


const LoginForm = (props) => {

    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <Field placeholder='Email' name="email" component={Input}
                       validate={[required, minLength, validEmail]}
                       type="email"/>
            </div>
            <div>
                <label htmlFor="Password">You Password</label>
                <Field placeholder='Password' name="password" component={Input}
                       validate={[required, minLength, maxLength]}
                       type="password"/>
            </div>
            <div>
                <Field component='input' name="rememberMe" type='checkbox'/> remember me
            </div>
            { props.error && <div className={classes.form_login}>
                {props.error}
            </div>
            }
            <div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)


export default ReduxLoginForm;