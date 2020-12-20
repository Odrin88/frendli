import React from 'react';
import Profile from "./Profile";




class ProfileContainer extends React.Component {



    render () {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


export default ProfileContainer;