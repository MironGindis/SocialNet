import React from 'react';
import './ProfileInfo.css';
import Preloader from "../../common/Preloader/Preloader";
import findjob from '../../../assets/images/trruejob.webp'
import chill from '../../../assets/images/chill.webp'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/User-Icon.png"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div className='Profile__image'>
            <img
                src='https://avatars.mds.yandex.net/get-pdb/881477/cccaab65-30dc-4715-923e-b2594c6bb6e0/s1200?webp=false'/>
        </div>
        <div className='ProfileIngo__UserName'>
            {props.profile.fullName}
        </div>
        <div className='Profile__DescriptionBlock'>
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} isOwner={props.isOwner}/>
            <div>
                <img src={ props.profile.photos.large ? props.profile.photos.large : userPhoto }/>
            </div>
            <div className='ProfileInfo__Status'>
                {props.profile.aboutMe}
            </div>
            <div>
                О работе
                <div><img src={props.profile.lookingForAJob ? findjob : chill}/></div>
                <div className='ProfileInfo__Status'>{props.profile.lookingForAJobDescription}</div>

            </div>
        </div>
    </div>
};

export default ProfileInfo;