let rerenderEntireTree = () => {
    console.log('state')
}

let state = {
    profilePage: {
        posts:[
            {id: 1, message: "Hi, how are you?", likeCount: 14},
            {id: 2, message: "How are you?", likeCount: 16},
            {id: 3, message: "Good", likeCount: 19},
            {id: 4, message: "Go play football", likeCount: 12}
        ],
        newPostText: "Add post..."
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
    },
    freindsBar: {
        users: [
            {id: 1, name: "Irina", surname: "Ivanova"},
            {id: 2,name: "ignat", surname: "Petrov"},
            {id: 3,name: "Vladislav", surname: "Belov"},
            {id: 4,name: "Grigory", surname: "Petyhov"},
            {id: 5,name: "Alexandor", surname: "Ordin"},
        ]
    }
}


export const addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ' ';
    rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;