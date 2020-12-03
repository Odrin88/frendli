import React from 'react';
import ReactDOM from 'react-dom';
import store from "./Redux/State";
import './index.css';
import App from './components/App';




let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={store.addPost.bind(store)}
                         updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


