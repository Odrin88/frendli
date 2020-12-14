import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../Reducers/profilePage";
import {withRouter} from "react-router-dom";
import Myprofile from "./Myprofile";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            return <Myprofile />
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {
                this.props.setUserProfileAC(response.data);
            });
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

export default connect (mapStateToProps, {setUserProfileAC}) (WithUrlDataContainerComponent);