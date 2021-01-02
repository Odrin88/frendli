import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../Reducers/profilePage";

const MyPostsnot = ({posts, newPostText, dispatch}) => {

    let postsElements = posts.map((post, index) => (
            <Posts
                key = {index}
                message={post.message}
                likeCount={post.likeCount}
            />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        dispatch(action);
    }

    return (
        <div>
            <div className={classes.mypost}>
                <input ref={newPostElement}
                       value={newPostText}
                       onChange={onPostChange}
                       type="text" size="40"
                       placeholder="Write something post..."
                       className={classes.mypost_add}/>
                <button onClick={addPost} type="submit" className={classes.mypost_btn}>Add Post</button>
            </div>
            <div className={classes.myposts_item}>
                {postsElements}
            </div>
        </div>
    )
}

MyPostsnot;