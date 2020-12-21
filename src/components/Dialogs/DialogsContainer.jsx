import React from 'react';
import Dialogs from "./Dialogs";
import {
    sendNewMessageActionCreator,
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
        sendNewMessage: (newMessageText) => {
            dispatch(sendNewMessageActionCreator(newMessageText));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);