import React from 'react';
import classes from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";

const DialogForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit} className={classes.form_message}>
            <Field component="input" name="newMessageText" placeholder="Enter your message"/>
            <button type="submit">Send message</button>
        </form>
    )
}

const DialogReduxForm = reduxForm({
    form: 'addMessageForm'
})(DialogForm)

export default DialogReduxForm;
