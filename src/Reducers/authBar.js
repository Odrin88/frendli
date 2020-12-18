import {authAPI} from "../API/api";

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
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setUserDataActionCreator = (id, email, login) => ({type: setUserData, data: {id, email, login}});

export const getAuthUsersData = () => {

    return (dispatch) => {
        authAPI.me()
            .then(response => {

                if (response.data.resultCode === 0 ) {
                    let {id, email, login} = response.data.data;
                    dispatch(setUserDataActionCreator(id, email, login));
                }
            });
    }

}

export default authReducer;