import {combineReducers, createStore} from "redux";
import messageReducer from "../Reducers/messagePage";
import freindsReducer from "../Reducers/freindsBar";
import profileReducer from "../Reducers/profilePage";
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from "../Reducers/usersPage";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    freindsBar: freindsReducer,
    usersPage: usersReducer
});

const composeEnhancer = composeWithDevTools ({
    trace: true
});



let store = createStore(reducers, composeEnhancer());



export default store;