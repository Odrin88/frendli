import React from 'react';
import classes from './Myprofile.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: " ",
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true
        });

    }

    deActivateEditMode = () => {
        this.setState( {
            editMode: false
        });
    }



    render() {
        return (
            <div className={classes.status_block}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.value || "No status"}
                            </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deActivateEditMode}
                            value={this.status}
                            />
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;