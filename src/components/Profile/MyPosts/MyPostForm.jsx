import React from 'react';
import {Field, reduxForm} from "redux-form";
import classes from "./MyPosts.module.css";

const MyPostForm = (props) => {
    const { handleSubmit } = props

    return(
        <form onSubmit={handleSubmit} className={classes.mypost}>
            <Field component="input" placeholder="Add new post" name="newPostText" className={classes.mypost_add}/>
            <button type="submit" className={classes.mypost_btn}>Add Post</button>
        </form>
    )
}

const MyPostReduxForm = reduxForm({
    form: 'newPostText'
})(MyPostForm)

export default MyPostReduxForm;