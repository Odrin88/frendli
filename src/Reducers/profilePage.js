import {profileAPI, usersAPI, usersAPI as userAPI} from "../API/api";
import {toggleFollowingInProgress, unfollowSuccess} from "./usersPage";
import Myprofile from "../components/Profile/Myprofile";
import React from "react";

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const setUserProfile = 'SET_USER_PROFILE';
const setUsersStatus = 'SET_USERS_STATUS';
// const likeCountIncrement ='LIKE_COUNT_INCREMENT'


let initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCount: 14},
            {id: 2, message: "How are you?", likeCount: 16},
            {id: 3, message: "Good", likeCount: 19},
            {id: 4, message: "Go play football", likeCount: 12}
        ],
        // count: 0,
        newPostText: "Add post...",
        profile: null,
        status: ""
};

const profileReducer = (state = initialState, action) => {
        switch(action.type) {
            case addPost: {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likeCount: 0
                };
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ' '
                }
            }
            case updateNewPostText: {
                return {
                    ...state,
                    newPostText: action.newText
                };
            }
            case setUserProfile: {
                return {...state, profile: action.profile}
            }
            case setUsersStatus: {
                return {...state, status: action.status}
            }
            /*case likeCountIncrement: {
                return {...state, count: action.count}
            }*/
            default:
                return state;
        }
}

export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostTextActionCreator = (text) =>
    ({type: updateNewPostText, newText: text});
export const setUserProfileAC = (profile) => ({type: setUserProfile, profile });
export const setUsersStatusAC = (status) => ({type: setUsersStatus, status});

// export const likeCountIncrementAC = (count) => ({type: likeCountIncrement, count})
export const getUsersProfile = (userId) => (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
                dispatch(setUserProfileAC(response.data));
            });
}
export const getUsersStatus = (userId) => (dispatch) => {
    profileAPI.getUsersStatus(userId).then(response => {
        dispatch(setUsersStatusAC(response.data));
    });
}

export const updateUsersStatus = (status) => (dispatch) => {
    profileAPI.updateUsersStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUsersStatusAC(status));
        }
    });
}

export default profileReducer;