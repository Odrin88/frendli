import React from 'react';
import {
    addPostActionCreator, likeCountIncrementAC,
    updateNewPostTextActionCreator
} from "../../../Reducers/profilePage";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        count: state.profilePage.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },

        /*count: () => {
            dispatch(likeCountIncrementAC());
        }*/

    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;