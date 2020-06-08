import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOTALUSERS = 'TOTALUSERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingNiProgress: [],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case (FOLLOW): {

            return {

                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case (UNFOLLOW): {
            return {

                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case (SET_CURRENT_PAGE): {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case (SETUSERS): {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case (TOTALUSERS): {
            return {
                ...state,
                totalCount: action.totalUsersCount,
            }
        }
        case (TOGGLE_IS_FETCHING): {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case (TOGGLE_FOLLOWING_PROGRESS): {
            return {
                ...state,
                followingNiProgress: action.isFetching
                    ? [...state.followingNiProgress, action.userID]
                    : state.followingNiProgress.filter(id => id !== action.userID)
            }
        }
        default:
            return state;
    }
}
//ACtionCreators
export const followSuccsess = (userID) => {
    return ({type: FOLLOW, userID})
}
export const unfollowSuccsess = (userID) => {
    return ({type: UNFOLLOW, userID})
}
export const setUsers = (users) => {
    return ({type: SETUSERS, users})
}
export const setCurrentPage = (currentPage) => {
    return ({type: SET_CURRENT_PAGE, currentPage})
}
export const setTotalUsers = (totalUsersCount) => {
    return ({type: TOTALUSERS, totalUsersCount})
}
export const toggleIsFetching = (isFetching) => {
    return ({type: TOGGLE_IS_FETCHING, isFetching})
}
export const toggleFolowingProgress = (isFetching, userID) => {
    return ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userID})
}

export const requestUsers = (pageSize, currentPage) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(pageSize, currentPage);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
    }
}
export const ChangePage = (pageSize, pageNumber) => {
    return async (dispatch) => {
        dispatch(requestUsers(pageSize, pageNumber));
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(pageSize, pageNumber)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
    }
}
export const unfollowThunk = (userID) => {
    return async (dispatch) => {
        dispatch(toggleFolowingProgress(true, userID));
        let response = await usersAPI.unfollow(userID)
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccsess(userID))
        }
        dispatch(toggleFolowingProgress(false, userID));
    }
}
export const followThunk = (userID) => {
    return async (dispatch) => {
        dispatch(toggleFolowingProgress(true, userID));
        let response = await usersAPI.follow(userID)
                if (response.data.resultCode === 0) {
                    dispatch(followSuccsess(userID))
                }
                dispatch(toggleFolowingProgress(false, userID));
    }
}
export default usersReducer;