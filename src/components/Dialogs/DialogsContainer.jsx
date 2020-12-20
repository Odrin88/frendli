import React from 'react';
import Dialogs from "./Dialogs";
import {
    sendNewMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../Reducers/messagePage";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);