import React from 'react';

let state = {
    profilePage: {
        posts:[
            {id: 1, message: "Hi, how are you?", likeCount: 14},
            {id: 2, message: "How are you?", likeCount: 16},
            {id: 3, message: "Good", likeCount: 19},
            {id: 4, message: "Go play football", likeCount: 12}
        ]
    },
    messagePage: {
        message: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Good"},
            {id: 4, message: "Go play football"}
        ],
        items: [
            {id: 1, name: "Viktor"},
            {id: 2, name: "Ivan"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Andrey"},
            {id: 5, name: "Egor"},
            {id: 6, name: "Petr"}
        ]
    }
}

export default state;