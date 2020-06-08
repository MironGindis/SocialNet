import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
        return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} isOwner={props.isOwner}/>
        <MyPostsContainer/>
    </div>
};

export default Profile;
