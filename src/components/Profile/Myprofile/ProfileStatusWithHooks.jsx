import React, {useState} from 'react';
import classes from './Myprofile.module.css';


const ProfileStatusWithHooks = (props) => {


    let [editMode,  seteditMode] =   useState(false);
    let [status,  setStatus] =   useState(props.status);

    const activateEditMode = () => {
        seteditMode(true);
    }

    const deActivateEditMode = () => {

            seteditMode(false);
        props.updateUsersStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
      return (

          <div className={classes.status_block}>
                { !editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode} >
                            {props.status|| "No status"}
                        </span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input
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

export default ProfileStatusWithHooks;