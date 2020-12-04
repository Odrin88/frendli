import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    sendNewMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../Redux/State";

const Dialogs = (props) => {

    let state = props.store.getState().messagePage;

    let DialogsElements = state.items.map( items => <DialogItem name={items.name} key={items} id={items.id} /> );
    let MessageElement = state.message.map( message => <Message message={message.message} key={message} id={message.id}/>);
    let newMessageText = state.newMessageText;


    let sendMessage = () => {
        props.store.dispatch(sendNewMessageActionCreator());
    }

    let onNewMessageChange = (e) => {
        let newMessage = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(newMessage));


    }

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
                               type="text" size="40"
                               placeholder="Enter your message..."
                               className={classes.message_add}/>
                        <button onClick={sendMessage} type="submit" className={classes.message_btn}>Send message</button>
                    </div>

            </div>
        </>

    )
}

export default Dialogs;