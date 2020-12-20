import React from 'react';
import Preloader from "../comman/preloader/Preloader";
import ProfileStatus from "../Profile/Myprofile/ProfileStatus";

const UsersProfile = (props) => {

    if (!props.profile) {
    return <Preloader/>
}

        return (
            <div>
                {props.profile.fullName}
                <ProfileStatus status={props.status}
                               updateUsersStatus={props.updateUsersStatus}/>
            </div>
            )

}

export default UsersProfile;