import React from 'react';
import {Field, reduxForm} from "redux-form";
import classes from "./MyPosts.module.css";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/Validators/validators";
import {Input} from "../../FormsControl/FormsControl";

const maxLength = maxLengthCreator(10);
const minLength = minLengthCreator(2);

const MyPostForm = (props) => {
    const { handleSubmit } = props

    return(
        <form onSubmit={handleSubmit} className={classes.mypost}>
            <Field component={Input} placeholder="Add new post" name="newPostText"
                   validate={[required, maxLength, minLength]}
                   className={classes.mypost_add}/>
            <button type="submit" className={classes.mypost_btn}>Add Post</button>
        </form>
    )
}

const MyPostReduxForm = reduxForm({
    form: 'newPostText'
})(MyPostForm)

export default MyPostReduxForm;