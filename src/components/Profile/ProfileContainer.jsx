import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUsersProfile} from "../../Reducers/profilePage";
import {withRouter} from "react-router-dom";
import Myprofile from "./Myprofile";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            return <Myprofile />
        }
        this.props.getUsersProfile(userId);
    }

    render () {
        return (
            <>
            <Profile {...this.props} profile={this.props.profile}/>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {getUsersProfile}) (WithUrlDataContainerComponent);