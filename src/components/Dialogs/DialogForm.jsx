import React from 'react';
import classes from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/Validators/validators";
import {Input} from "../FormsControl/FormsControl";

const maxLength = maxLengthCreator(50);

const DialogForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit} className={classes.form_message}>
            <Field component={Input} name="newMessageText"
                   validate={[required, maxLength]}
                   placeholder="Enter your message"/>
            <button type="submit">Send message</button>
        </form>
    )
}

const DialogReduxForm = reduxForm({
    form: 'addMessageForm'
})(DialogForm)

export default DialogReduxForm;
