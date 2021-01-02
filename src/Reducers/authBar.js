import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";


const setUserData = 'SET_USER_DATA';




let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case setUserData: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}

export const setUserDataActionCreator = (id, email, login, isAuth) => ({type: setUserData,
    payload: {id, email, login, isAuth}});

export const getAuthUsersData = () => async (dispatch) => {
       let response = await authAPI.me();
            if (response.data.resultCode === 0 ) {
                    let {id, email, login} = response.data.data;
                    dispatch(setUserDataActionCreator(id, email, login, true));
            }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe);
                if (response.data.resultCode === 0 ) {
                    dispatch(getAuthUsersData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                    dispatch(stopSubmit("login", {_error: message}));
                }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
            if (response.data.resultCode === 0 ) {
                dispatch(setUserDataActionCreator(null, null, null, false));
            }
}

export default authReducer;