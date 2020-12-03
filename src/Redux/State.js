let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubsciber() {
        console.log('state')
    },
    addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ' ';
        this._callSubsciber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubsciber(this._state);
    },
    subscribe(observer) {
        this._callSubsciber = observer;
    },

    addFreinds() {
        console.log('hi')
    }



}
export default store;
window.store = store;