import React from 'react';
import Dialogs from "./Dialogs";
import {
    sendNewMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../Reducers/messagePage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newMessage) => {
            dispatch(updateNewMessageTextActionCreator(newMessage));
        },
        sendNewMessage: () => {
            dispatch(sendNewMessageActionCreator());
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogContainer;