import React from 'react';
import classes from './Profile.module.css';
/*import MyPosts from './MyPosts/MyPosts';*/
import Myprofile from './Myprofile/Myprofile';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
   return (
        <div className={classes.profile}>
            <Myprofile />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;