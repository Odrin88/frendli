import React from 'react';
import classes from './Myprofile.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status

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
        this.props.updateUsersStatus(this.state.status);
    }


    onStatusChange = (e) => {
        this.setState({
           status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={classes.status_block}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status|| "No status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deActivateEditMode}
                            value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;