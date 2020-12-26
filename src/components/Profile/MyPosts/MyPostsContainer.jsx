import React from 'react';
import {
    addPostActionCreator,
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

        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;