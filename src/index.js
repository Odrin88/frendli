import React from 'react';
import ReactDOM from 'react-dom';
import state, {subscribe} from "./Redux/State";
import './index.css';
import App from './components/App';
import {addPost, updateNewPostText} from "./Redux/State";



let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         updateNewPostText={updateNewPostText}/>,
        document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);


