import React from 'react';
import Preloader from "../comman/preloader/Preloader";
import ProfileStatus from "../Profile/Myprofile/ProfileStatus";
import ProfileStatusWithHooks from "../Profile/Myprofile/ProfileStatusWithHooks";

const UsersProfile = (props) => {

    if (!props.profile) {
    return <Preloader/>
}

        return (
            <div>
                {props.profile.fullName}
                <ProfileStatusWithHooks status={props.status}
                               updateUsersStatus={props.updateUsersStatus}/>
            </div>
            )

}

export default UsersProfile;