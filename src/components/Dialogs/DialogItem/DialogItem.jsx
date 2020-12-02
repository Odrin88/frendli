import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <>
        <div className={classes.dialog + ' ' + classes.active}>
            <img src="https://i04.fotocdn.net/s106/6ee26575aa7dcb29/user_l/2285411336.jpg"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
        </>
    )
}
export default DialogItem;