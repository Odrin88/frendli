const addNewMessage = 'ADD-NEW-MESSAGE';
const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT';

const messageReducer = (state, action) => {
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