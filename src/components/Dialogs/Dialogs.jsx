import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let DialogsElements = props.state.items.map( items => <DialogItem name={items.name} key={items} id={items.id} /> );
    let MessageElement = props.state.message.map( message => <Message message={message.message} key={message} id={message.id}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert('dfsfd');
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

                    <div className={classes.messages}>
                        {MessageElement}
                    </div>

                </div>
                <form>
                    <div className={classes.form_message}>
                        <input ref={newMessageElement} type="text" size="40" placeholder="Add new message..." className={classes.message_add}/>
                        <button onClick={addMessage} type="submit" className={classes.message_btn}>Send message</button>
                    </div>
                </form>

            </div>
        </>

    )
}

export default Dialogs;