import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Myprofile from './Myprofile/Myprofile';


const Profile = (props) => {

   return (
        <div className={classes.profile}>
            <Myprofile />
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;