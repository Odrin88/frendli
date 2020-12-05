import React from 'react';
import Dialogs from "./Dialogs";
import {
    sendNewMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../Reducers/messagePage";


const DialogsContainer = (props) => {

    let state = props.store.getState().messagePage;


    let sendMessage = () => {
        props.store.dispatch(sendNewMessageActionCreator());
    }
    let onNewMessageChange = (newMessage) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newMessage));
    }

    return (
        <Dialogs
            updateNewMessageText={onNewMessageChange}
            sendNewMessage={sendMessage}
            messagePage={state}
        />
    )
}

export default DialogsContainer;