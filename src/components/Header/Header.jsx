import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img className={classes.header_logo} src="https://www.logologo.com/logos/winged-g-logo.jpg"/>
        <div className={classes.search_block}>
            <input type="search" placeholder="Search here..." className={classes.search_box}/>
        </div>
        <div className={classes.login_block}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>


}

export default Header;