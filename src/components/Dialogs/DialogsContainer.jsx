import React from 'react';
import Dialogs from "./Dialogs";
import {
    sendNewMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../Reducers/messagePage";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().messagePage;


                    let sendMessage = () => {
                        store.dispatch(sendNewMessageActionCreator());
                    }
                    let onNewMessageChange = (newMessage) => {
                        store.dispatch(updateNewMessageTextActionCreator(newMessage));
                    }
                    return (
                        <Dialogs
                            updateNewMessageText={onNewMessageChange}
                            sendNewMessage={sendMessage}
                            messagePage={state}
                        />
                    )}
            }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer;