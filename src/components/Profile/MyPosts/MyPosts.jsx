import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profilePage";



const MyPosts = (props) => {

    let postsElements =
        props.posts.map( posts => <Posts message={posts.message}
            likeCount={posts.likeCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div>
            <div className={classes.mypost}>
                <input ref={newPostElement}
                       value={props.newPostText}
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

export default MyPosts;