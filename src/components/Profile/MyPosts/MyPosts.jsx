import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {

    let PostData = [
        {id: 1, message: "Hi, how are you?", likeCount: 14},
        {id: 2, message: "How are you?", likeCount: 16},
        {id: 3, message: "Good", likeCount: 19}
    ]
    return (
    <div>
      <div className={classes.item}>
        <textarea></textarea>
          <div>
              <button>Add Post</button>
          </div>
      </div>
      <div className={classes.item}>New post</div>
      <Posts message={PostData[0].message} likeCount={PostData[0].likeCount}/>
      <Posts
          message={PostData[1].message}
          likeCount={PostData[1].likeCount}/>
      <Posts
          message={PostData[2].message}
          likeCount={PostData[2].likeCount}/>
    </div>
    )
   
}

export default MyPosts;