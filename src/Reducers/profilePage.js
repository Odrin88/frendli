import {profileAPI} from "../API/api";
import React from "react";

const addPost = 'ADD-POST';
const setProfileStatus = 'SET_PROFILE_STATUS';
const updateProfileStatus = 'UPDATE_PROFILE_STATUS';



let initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCount: 14},
            {id: 2, message: "How are you?", likeCount: 16},
            {id: 3, message: "Good", likeCount: 19},
            {id: 4, message: "Go play football", likeCount: 12}
        ],

        status: ""
};

const profileReducer = (state = initialState, action) => {
        switch(action.type) {
            case addPost: {
                let newPost = {
                    id: 5,
                    message: action.newPostText,
                    likeCount: 0
                };
                return {
                    ...state,
                    posts: [...state.posts, newPost],

                }
            }

            case setProfileStatus: {
                return {...state, status: action.newStatus}
            }

            case updateProfileStatus: {
                return {...state, status: action.newStatusText}
            }



            default:
                return state;
        }
}

export const addPostActionCreator = (newPostText) => ({type: addPost, newPostText});
export const setProfileStatusAC = (newStatus) => ({type: setProfileStatus, newStatus});
export const updateProfileStatusAC = (newStatusText) => ({type: updateProfileStatus, newStatusText});


export const getProfileStatus = (dispatch) => {
    return {
        newStatus: (newStatus) => {
            dispatch(setProfileStatusAC(newStatus));
        }
    }
}

export const updateStatus = (dispatch) => {
    return {
        newStatusText: (newStatusText) => {
            dispatch(updateProfileStatusAC(newStatusText));
        }
    }
}

/*export const getProfileStatus = (userId) => (dispatch) => {
    profileAPI.getUsersStatus(userId).then(response => {
        dispatch(setProfileStatusAC(response.data));
    });
}*/


export default profileReducer;