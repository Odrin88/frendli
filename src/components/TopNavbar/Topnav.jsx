import React from 'react';
import classes from './Topnav.module.css';

const Topnav = () => {
    return (
        <div className={classes.profile_friend}>
            <div className={classes.profile_avatar}>
                <img src="https://iqonic.design/themes/socialv/html-dark/images/user/01.jpg"/>
            </div>
            <div className={classes.profile_info}>
                <h4>Anna Fedorova</h4>
                <p>Admin</p>
            </div>
        </div>
    )


}

export default Topnav;