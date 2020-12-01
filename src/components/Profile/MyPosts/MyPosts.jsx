import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = (props) => {

    let postsElements = props.posts.map( posts => <Posts message={posts.message} likeCount={posts.likeCount}/>);


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

                {postsElements}
            </div>

        </div>
    )

}

export default MyPosts;