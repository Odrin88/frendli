import React from 'react';
import Profile from "./Profile";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfileStatus, updateStatus} from "../../Reducers/profilePage";




class ProfileContainer extends React.Component {

    render () {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     newStatus={this.props.newStatus}
                     newStatusText={this.props.newStatusText}
            />
        )
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        status: (newStatus) => {
            dispatch(setProfileStatusAC(newStatus));
        }
    }
}*/


const mapStateToProps = (state) => ({
    newStatus: state.profilePage.newStatus,
    newStatusText: state.profilePage.newStatusText
});


export default compose(withAuthRedirect,
    connect (mapStateToProps, {getProfileStatus, updateStatus}),
    withRouter
)(ProfileContainer)