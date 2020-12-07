import React from 'react';
import classes from './Posts.module.css'

const Posts = (props) => {

    let onAddLike = () => {
        console.log(onAddLike);
    }
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
                <button onClick={onAddLike} type="submit" className={classes.like_btn}>Like</button>
                <span className={classes.likecount}>{props.likeCount}</span>
            </div>
        </div>
    )

}

export default Posts;