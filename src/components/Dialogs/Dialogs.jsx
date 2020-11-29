import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let DialogsData = [
        {id: 1, name: "Viktor"},
        {id: 2, name: "Ivan"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Andrey"},
        {id: 5, name: "Egor"},
        {id: 6, name: "Petr"}
    ];

    let MessageData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Good"}
    ]


    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsitems}>
                    <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                    <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
                    <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
                    <DialogItem name={DialogsData[3].name} id={DialogsData[1].id}/>
                    <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}/>
                    <DialogItem name={DialogsData[5].name} id={DialogsData[5].id}/>
                </div>
            </div>
            <div className={classes.messages}>
                <Message message={MessageData[0].message}/>
                <Message message={MessageData[1].message}/>
                <Message message={MessageData[2].message}/>
            </div>
        </div>

    )
}

export default Dialogs;