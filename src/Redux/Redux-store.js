import {combineReducers, createStore} from "redux";
import messageReducer from "./messagePage";
import freindsReducer from "./freindsBar";
import profileReducer from "./profilePage";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    freindsBar: freindsReducer
});

let store = createStore(reducers);



export default store;