import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    setCurrentPage,
    followSuccsess,
    setUsers,
    toggleIsFetching,
    setTotalUsers,
    unfollowSuccsess,
    toggleFolowingProgress, requestUsers, ChangePage, unfollowThunk, followThunk
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingNiProgress,
    getIsFetching,
    getPageSize,
    getTotalCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage);

    }

    componentWillUnmount() {
        this.props.setCurrentPage(1);
    }

    onPageChanged = (pageNumber) => {
        this.props.ChangePage(this.props.pageSize, pageNumber);
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}
                   toggleFolowingProgress={this.props.toggleFolowingProgress}
                   followingNiProgress={this.props.followingNiProgress}
            />
        </>
    }
}

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingNiProgress: state.usersPage.followingNiProgress,
    }
}*/
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingNiProgress: getFollowingNiProgress(state),
    }
}
export default compose (
    connect(mapStateToProps, {
        followSuccsess,
        unfollowSuccsess,
        setUsers,
        setCurrentPage,
        setTotalUsers,
        toggleIsFetching,
        toggleFolowingProgress,
        requestUsers,
        ChangePage,
        followThunk,
        unfollowThunk,
    }),
    withAuthRedirect)(UsersContainer)