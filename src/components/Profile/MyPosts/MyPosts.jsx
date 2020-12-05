import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = (props) => {

    let postsElements = props.posts.map((post, index) => (
            <Posts
                key = {index}
                message={post.message}
                likeCount={post.likeCount}
            />
    ));

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
                <button onClick={onAddPost} type="submit" className={classes.mypost_btn}>Add Post</button>
            </div>
            <div className={classes.myposts_item}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;