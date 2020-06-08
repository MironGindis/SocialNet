import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 15,
            source: 'https://avatars.mds.yandex.net/get-zen_doc/1328583/pub_5c51c6e9420c4000ad739cf2_5c52fcca3c26f500aef4416b/scale_1200'
        },
        {
            id: 2,
            message: 'Yo this is my first post',
            likesCount: 23,
            source: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39c5e0dd-e819-4a7d-b314-5b9665bd8e30/d7bkh20-72708552-82b2-40ae-8b83-ee1dbe2e7846.jpg/v1/fill/w_768,h_960,q_75,strp/keanu_reeves___neo__matrix__by_zied8008_d7bkh20-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMzljNWUwZGQtZTgxOS00YTdkLWIzMTQtNWI5NjY1YmQ4ZTMwXC9kN2JraDIwLTcyNzA4NTUyLTgyYjItNDBhZS04YjgzLWVlMWRiZTJlNzg0Ni5qcGciLCJ3aWR0aCI6Ijw9NzY4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.izytAEyMlLpdU7qWbxOHbZzEoMihKinfjLrRXD-3UBU'
        },
    ],
    profile: null,
    status: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_POST): {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
                source: 'https://avatars.mds.yandex.net/get-zen_doc/1328583/pub_5c51c6e9420c4000ad739cf2_5c52fcca3c26f500aef4416b/scale_1200'
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }
        case (SET_USER_PROFILE): {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case (SET_STATUS): {
            return {
                ...state,
                status: action.status,
            }
        }

        default:
            return state;
    }
}
export const addPost = (newPostText) => {
    return ({type: ADD_POST, newPostText});
}
export const setUserProfile = (profile) => {
    return ({type: SET_USER_PROFILE, profile});
}
export const setStatus = (status) => {
    return ({type: SET_STATUS, status: status});
}
export const getUserProfile = (usersId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(usersId);
                dispatch(setUserProfile(response.data));
    }
}
export const getUserStatus = (usersId) => {
    return async (dispatch) => {
     let response = await  profileAPI.getStatus(usersId);
                dispatch(setStatus(response.data));
    }
}
export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
    }
}

export default profileReducer;