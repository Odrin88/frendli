import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {addPost} from "./Redux/State";



export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
        addPost={addPost}/>, document.getElementById('root'));
}

