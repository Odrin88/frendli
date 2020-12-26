import React from 'react';
import UsersProfile from "./UsersProfile";
import {compose} from "redux";
import {connect} from "react-redux";
import {getUsersProfile, getUsersStatus, updateUsersStatus} from "../../Reducers/usersPage";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/AuthRedirect";


class UsersProfileContainer extends React.Component {


    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            /*if (!userId) {
                this.props.history.push("/login") // если не авторизован редерект на логин page
            }*/
        }
        this.props.getUsersProfile(userId);
        this.props.getUsersStatus(userId);

    }

    render() {
        return (
            <UsersProfile {...this.props}
                          profile={this.props.profile}
                          status={this.props.status}
                          updateUsersStatus={this.props.updateUsersStatus}
            />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.usersPage.profile,
    status: state.usersPage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth


});


export default compose(withAuthRedirect,
    connect (mapStateToProps, {getUsersProfile, getUsersStatus, updateUsersStatus}),
    withRouter
)(UsersProfileContainer)