import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsitems}>
                    <div className={classes.dialog + ' ' + classes.active}>
                        Viktor
                    </div>
                    <div className={classes.dialog}>
                        Ivan
                    </div>
                    <div className={classes.dialog}>
                        Sveta
                    </div>
                    <div className={classes.dialog}>
                        Andrey
                    </div>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Good</div>
            </div>
        </div>

    )
}

export default Dialogs;