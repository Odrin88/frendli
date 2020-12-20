import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.messagePage;
    let DialogsElements = state.items.map( (items, index) => (
            <DialogItem
                name={items.name}
                key={index}
                id={items.id}
            />
    ));
    let MessageElement = state.message.map( (message, index) => (
            <Message
                message={message.message}
                key={index}
                id={message.id}
            />
    ));
    let newMessageText = state.newMessageText;

    let sendMessage = () => {
        props.sendNewMessage();
    }
    let onNewMessageChange = (e) => {
        let newMessage = e.target.value;
        props.updateNewMessageText(newMessage);
    }

   if (!props.isAuth)  return <Redirect to="/Login"/>;

    return (
        <>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div className={classes.dialogs}>
                        <div className={classes.dialogs_items}>
                            {DialogsElements}
                        </div>
                    </div>

                    <div className={classes.messages}>
                        {MessageElement}
                    </div>
                </div>
                    <div className={classes.form_message}>
                        <input value={newMessageText}
                               onChange={onNewMessageChange}
                               type="text"
                               size="40"
                               className={classes.message_add}/>
                        <button
                            onClick={sendMessage}
                            type="submit"
                            className={classes.message_btn}>
                            Send message
                        </button>
                    </div>

            </div>
        </>
    )
}

export default Dialogs;