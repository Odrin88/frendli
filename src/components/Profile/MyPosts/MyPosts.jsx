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
      <div className={classes.mypost}>
          <form>
              <hr/>
              <input type="text" size="40" placeholder="Write something post..." className={classes.mypost_add}/>
              <hr/>
              <div>
                  <button type="submit" className={classes.mypost_btn}>Add Post</button>
              </div>
          </form>
      </div>
      <div className={classes.myposts_item}>
          <Posts message={PostData[0].message} likeCount={PostData[0].likeCount}/>
          <Posts
              message={PostData[1].message}
              likeCount={PostData[1].likeCount}/>
          <Posts
              message={PostData[2].message}
              likeCount={PostData[2].likeCount}/>
      </div>

    </div>
    )
   
}

export default MyPosts;