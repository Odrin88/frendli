const addNewMessage = 'ADD-NEW-MESSAGE';
const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const messageReducer = (state = {initialState}, action) => {
    switch (action.type) {
        case updateNewMessageText:
            state.newMessageText = action.newMessage;
            return state;
        case addNewMessage:
            let newMessage = state.newMessageText;
            state.newMessageText = '';
            state.message.push({id: 5, message: newMessage});
            return state;
        default:
            return state;

    }
}


export const sendNewMessageActionCreator = () => ({type: addNewMessage});
export const updateNewMessageTextActionCreator = (newMessage) =>
    ({type: updateNewMessageText, newMessage: newMessage});

export default messageReducer;