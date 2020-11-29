import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {
    return (
    <div>
      <div className={classes.item}>
        <textarea></textarea>
        <button>Add Post</button>
        </div>
      <div className={classes.item}>New post</div>
      <Posts 
      message="Hi, how are you?"
      like="14"/>
      <Posts 
      message="Its my first post"
      like="16"/>
      <Posts 
      message="Like my foto!"
      like="19"/>
    </div>
    )
   
}

export default MyPosts;