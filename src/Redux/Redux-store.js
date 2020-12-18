import {applyMiddleware, combineReducers, createStore} from "redux";
import messageReducer from "../Reducers/messagePage";
import freindsReducer from "../Reducers/freindsBar";
import profileReducer from "../Reducers/profilePage";
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from "../Reducers/usersPage";
import authReducer from "../Reducers/authBar";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    freindsBar: freindsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

/*const composeEnhancer = composeWithDevTools ({
    trace: true
    composeEnhancer()
});*/



let store = createStore(reducers, applyMiddleware(thunkMiddleware));



export default store;