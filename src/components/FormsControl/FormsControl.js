import React from 'react';
import classes from "./FormControl.module.css";

export const Input = ({input, meta, ...props}) => {

const showError = meta.touched && meta.error;
    return (
        <div className={showError ? classes.error : ''}>
            <div>
                { <input {...input} {...props}/> }
            </div>
            {  showError && <span>{meta.error}</span> }
        </div>
    )
}

