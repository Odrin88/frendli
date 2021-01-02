import React, {useEffect, useState} from 'react';
import classes from './Myprofile.module.css';


const ProfileStatus = (props) => {

    let [editMode,  setEditMode] =   useState(false);
    let [status,  setStatus] =   useState(props.newStatus);

    useEffect( () => {

        setStatus(props.newStatus);
    }, [props.newStatus]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deActivateEditMode = (e) => {
        setEditMode(false);
        setStatus(e.currentTarget.value);
    }


    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


        return (
            <div className={classes.status_block}>
                {!editMode &&
                    <div>
                        <span className={classes.status_block_text} onDoubleClick={activateEditMode} >
                            {status || "Add status"}
                        </span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input
                            className={classes.status_block_change_text}
                            onChange={onStatusChange}
                            value={status}
                            autoFocus={true}
                            onBlur={deActivateEditMode}
                            />
                    </div>
                }
            </div>
        )

}

export default ProfileStatus;