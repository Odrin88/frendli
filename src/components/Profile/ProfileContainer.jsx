import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../Reducers/profilePage";


class ProfileContainer extends React.Component {



    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
            .then(response => {
                this.props.setUserProfileAC(response.data);
            });
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

});
export default connect (mapStateToProps, {setUserProfileAC}) (ProfileContainer);