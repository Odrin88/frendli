import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Myprofile from './Myprofile/Myprofile';

const Profile = () => {
    return (
        <div className={classes.profile}>
            <Myprofile />
            <MyPosts />
        </div>
    )
}

export default Profile;