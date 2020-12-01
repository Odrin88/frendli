import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

let DialogsData = [
    {id: 1, name: "Viktor"},
    {id: 2, name: "Ivan"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Andrey"},
    {id: 5, name: "Egor"},
    {id: 6, name: "Petr"}
];

let MessageData = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Good"},
    {id: 4, message: "Go play football"}
]

let PostData = [
    {id: 1, message: "Hi, how are you?", likeCount: 14},
    {id: 2, message: "How are you?", likeCount: 16},
    {id: 3, message: "Good", likeCount: 19},
    {id: 4, message: "Go play football", likeCount: 12}

]

ReactDOM.render(<App items={DialogsData} message={MessageData} posts={PostData}/>, document.getElementById('root'));

