import React from 'react';
import UsersProfile from "./UsersProfile";
import Myprofile from "../Profile/Myprofile";
import {compose} from "redux";
import {connect} from "react-redux";
import {getUsersProfile, getUsersStatus, updateUsersStatus} from "../../Reducers/profilePage";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import Preloader from "../comman/preloader/Preloader";

class UsersProfileContainer extends React.Component {


    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            return <Preloader/>
        }
        this.props.getUsersProfile(userId);
        this.props.getUsersStatus(userId);

    }

    render() {
        return (
            <UsersProfile {...this.props} profile={this.props.profile}
                          status={this.props.status}
                          updateUsersStatus={this.props.updateUsersStatus}
            />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status


});


export default compose(
    connect (mapStateToProps, {getUsersProfile, getUsersStatus, updateUsersStatus}),
    withRouter
)(UsersProfileContainer)