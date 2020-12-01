import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let DialogsElements = props.state.items.map( items => <DialogItem name={items.name} key={items} id={items.id} /> );
    let MessageElement = props.state.message.map( message => <Message message={message.message} key={message} id={message.id}/>)

    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                <div className={classes.dialogs_items}>

                    {DialogsElements}

                </div>
            </div>
            <div className={classes.messages}>
                {MessageElement}
            </div>
            <div className={classes.messages}>
                {MessageElement}
            </div>
        </div>

    )
}

export default Dialogs;