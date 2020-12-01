import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let DialogsElements = props.items.map( items => <DialogItem name={items.name} key={items} id={items.id} /> );
    let messageElement = props.message.map( message => <Message message={message.message} key={message} id={message.id}/>)


    // let DialogsElements = DialogsData
    //     .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );


    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsitems}>
                    {DialogsElements}

                </div>
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>
        </div>

    )
}

export default Dialogs;