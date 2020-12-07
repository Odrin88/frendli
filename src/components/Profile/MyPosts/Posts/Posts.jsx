import React from 'react';
import classes from './Posts.module.css'

const Posts = (props) => {


    return (
        <div>
            <div className={classes.posts_items}>
                <div className={classes.item}>
                    <img src="https://i04.fotocdn.net/s106/6ee26575aa7dcb29/user_l/2285411336.jpg"/>
                    <div className={classes.posts_item}>
                        {props.message}
                    </div>

                </div>

            </div>


            <div>
                <input type="image" src="https://pngimg.com/uploads/like/like_PNG15.png" className={classes.like_icon}/>
                <span className={classes.likecount}>{props.likeCount}</span>
            </div>
        </div>
    )

}

export default Posts;