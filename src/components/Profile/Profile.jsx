import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Myprofile from './Myprofile/Myprofile';

const Profile = () => {
    return <div className={classes.content}>
    <img className={classes.img} src="https://www.freelancejob.ru/upload/244/7181aa8c7818bb80893d08044fc8d4b2.jpg"/>
  <Myprofile />
  <MyPosts />   
  </div>
}

export default Profile;