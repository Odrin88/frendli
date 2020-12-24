import React, {useState} from 'react';
import classes from './Posts.module.css'

const Posts = (props) => {

    const [count, setLike] = useState(0);



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

            <div className={classes.like_block}>
                <img onClick={() => setLike(count + 1)}
                     className={classes.like_icon}
                     src="https://pngimg.com/uploads/like/like_PNG15.png"/>

                <p>{count}</p>
            </div>
        </div>
    )

}

export default Posts;