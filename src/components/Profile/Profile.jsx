import React from 'react';
import classes from './Profile.module.css';
import Myprofile from './Myprofile/Myprofile';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

   return (
        <div className={classes.profile}>
            <Myprofile profile={props.profile}
                       newStatus={props.newStatus}
                       newStatusText={props.newStatusText}
            />
            <MyPostsContainer />

        </div>
    )
}

export default Profile;