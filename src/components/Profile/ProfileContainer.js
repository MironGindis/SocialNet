import React from 'react';
import './Profile.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import { withRouter} from "react-router-dom";
import {compose} from "redux";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let usersId = this.props.match.params.usersId;
        if (!usersId) {
            usersId= this.props.autorizedUserId;
            if (!usersId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(usersId);
        this.props.getUserStatus(usersId);

    }
    render() {
        let usersId = this.props.match.params.usersId;
        return <Profile {...this.props} isOwner={!usersId || usersId ==this.props.autorizedUserId}/>
    }
}
    let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.id,
    });
export default compose (
    connect(mapStateToProps,{getUserProfile,getUserStatus, updateUserStatus}),
    withRouter)(ProfileContainer);

