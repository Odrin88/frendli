import React from 'react';
import classes from './../Freinds.module.css';
import {NavLink} from 'react-router-dom';

const FreindsBar = (props) => {
    let path = "/freinds/" + props.id;
    return (
        <div className={classes.freinds}>
            <NavLink to={path}>
            <img src="https://iqonic.design/themes/socialv/html-dark/images/user/01.jpg"/>
            {props.name} {props.surname}
            </NavLink>
        </div>
    )
}
export default FreindsBar;