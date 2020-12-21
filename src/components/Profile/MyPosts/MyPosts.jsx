import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts';
import MyPostForm from "./MyPostForm";
import MyPostReduxForm from "./MyPostForm";

const MyPosts = (props) => {



    let postsElements = props.posts.map((post, index) => (
            <Posts
                key = {index}
                message={post.message}
                likeCount={post.likeCount}
            />
    ));


    let addNewPostChange = (value) => {
        props.addPost(value.newPostText);
    }

    return (
        <div>
            <MyPostReduxForm onSubmit={addNewPostChange}/>
            <div className={classes.myposts_item}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;