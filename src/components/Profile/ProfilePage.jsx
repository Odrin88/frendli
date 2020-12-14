import React from 'react';
import {NavLink} from 'react-router-dom';
import Preloader from "../comman/preloader/Preloader";
import classes from "./Myprofile/Myprofile.module.css";

const profilePage = (props) => {



    return (
        <div>
            <img className={classes.img} src="https://prokadastr.com/wp-content/uploads/2019/09/kak-besplatno-poluchit-zemlu.jpg"/>

            {props.profile.fullName}


        </div>
    )
}
export default profilePage;