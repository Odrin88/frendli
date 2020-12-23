import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {getAuthUsersData} from "./authBar";


const setInitialized = 'SET_INITIALIZED'




let initialState = {
    initialized: false,
};


const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case setInitialized: {
            return {
                initialized: true,
            }
        }
        default:
            return state;
    }
}

export const setInitializedActionCreator = () => ({type: setInitialized});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUsersData());

    Promise.all([promise])
        .then(() => {
        dispatch(setInitializedActionCreator());
    });


}


export default appReducer;