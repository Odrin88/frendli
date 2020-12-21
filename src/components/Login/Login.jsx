import React from 'react';
import LoginForm from "./LoginForm";
import ReduxLoginForm from "./LoginForm";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

export default Login;