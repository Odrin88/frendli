import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <img className={classes.header_logo} src="https://www.logologo.com/logos/winged-g-logo.jpg"/>
        <div className={classes.search_block}>
            <input type="search" placeholder="Search here..." className={classes.search_box}/>
        </div>
    </header>


}

export default Header;