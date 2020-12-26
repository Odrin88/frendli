import {profileAPI, usersAPI as userAPI, usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';
const setUserProfile = 'SET_USER_PROFILE';
const setUsersStatus = 'SET_USERS_STATUS';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

    profile: null,
    status: ""


};


const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId) {
                        return {...u,followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId) {
                        return {...u,followed: false}
                    }
                    return u;
                })
            }
            return state;
        case SETUSERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case setUserProfile: {
            return {...state, profile: action.profile}
        }
        case setUsersStatus: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SETUSERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (inProgress, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, inProgress, userId});
export const setUserProfileAC = (profile) => ({type: setUserProfile, profile });
export const setUsersStatusAC = (status) => ({type: setUsersStatus, status});

export const requestUsers = (page,pageSize) => {

    return (dispatch) => {
        dispatch (toggleIsFetching(true));
        dispatch (setCurrentPage(page));

        usersAPI.requestUsers(page, pageSize).then(data => {
            dispatch (toggleIsFetching(false));
            dispatch (setUsers(data.items));
            // this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

}

export const follow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingInProgress(false, userId));
            });
    }

}

export const unfollow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        userAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingInProgress(false, userId));
            });
    }

}

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
export default usersReducer;