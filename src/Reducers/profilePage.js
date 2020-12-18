import {usersAPI, usersAPI as userAPI} from "../API/api";
import {toggleFollowingInProgress, unfollowSuccess} from "./usersPage";
import Myprofile from "../components/Profile/Myprofile";
import React from "react";

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const setUserProfile = 'SET_USER_PROFILE';



let initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCount: 14},
            {id: 2, message: "How are you?", likeCount: 16},
            {id: 3, message: "Good", likeCount: 19},
            {id: 4, message: "Go play football", likeCount: 12}
        ],
        newPostText: "Add post...",
        profile: null
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
            default:
                return state;
        }
}

export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostTextActionCreator = (text) =>
    ({type: updateNewPostText, newText: text});
export const setUserProfileAC = (profile) => ({type: setUserProfile, profile })

export const getUsersProfile = (userId) => {

    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfileAC(response.data));
            });
    }

}

export default profileReducer;