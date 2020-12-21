import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import DialogReduxForm from "./DialogForm";


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


    let addNewMessageChange = (values) => {
        props.sendNewMessage(values.newMessageText);
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
                <DialogReduxForm onSubmit={addNewMessageChange}/>

            </div>
        </>
    )
}




export default Dialogs;