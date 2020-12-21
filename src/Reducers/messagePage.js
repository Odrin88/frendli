const addNewMessage = 'ADD-NEW-MESSAGE';

let initialState = {
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
};

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case addNewMessage:
            let newMessage = action.newMessageText;
            return {
                ...state,
                message: [...state.message, {id: 5, message: newMessage}]
            };
        default:
            return state;

    }
}


export const sendNewMessageActionCreator = (newMessageText) => ({type: addNewMessage, newMessageText});

export default messageReducer;