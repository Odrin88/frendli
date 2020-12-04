import profileReducer from "./profilePage";
import messageReducer from "./messagePage";
import freindsReducer from "./freindsBar";

let store = {
    _state: {
        profilePage: {
            posts: [
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

            newMessageText: "Write message...",

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
                {id: 2, name: "ignat", surname: "Petrov"},
                {id: 3, name: "Vladislav", surname: "Belov"},
                {id: 4, name: "Grigory", surname: "Petyhov"},
                {id: 5, name: "Alexandor", surname: "Ordin"},
            ]
        }
    },
    _callSubsciber() {
        console.log('state')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubsciber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.freindsBar = freindsReducer(this._state.freindsBar, action);

        this._callSubsciber(this._state);
    }
}

export default store;



    /*if (action.type === addPost) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ' ';
            this._callSubsciber(this._state);
        } else if (action.type === updateNewPostText) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubsciber(this._state);
        } else if (action.type === updateNewMessageText) {
            this._state.messagePage.newMessageText = action.newMessage;
            this._callSubsciber(this._state);
        } else if (action.type === addNewMessage) {
            let newMessage = this._state.messagePage.newMessageText;
            this._state.messagePage.newMessageText = '';
            this._state.messagePage.message.push({id: 5, message: newMessage});
            this._callSubsciber(this._state);
        }*/

    /*
        addFreinds() {
            return this._state;
        }*/

