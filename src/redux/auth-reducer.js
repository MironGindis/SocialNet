import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SET_USER_DATA): {
            return{
                ...state,
                ...action.data,
            }
        }
        default:
            return state;
    }
}
export const setAuthUserData = (id, login, email, isAuth) => {
    return ({type: SET_USER_DATA, data: {id, login, email, isAuth} })
}
export const getAuthUserData = () => {
    return async (dispatch) =>{
        let response = await authAPI.authMe();
                if (response.data.resultCode ===0){
                   dispatch( setAuthUserData(response.data.data.id, response.data.data.login, response.data.data.email, true));
                }
    }
}
export const login = (email, password, rememberMe) => {
    return  async (dispatch) =>{
       let response = await authAPI.login(email, password, rememberMe)
                if (response.data.resultCode ===0){
                    dispatch(getAuthUserData());
                } else {
                    let errorMessage = response.data.messages.length>0 ? response.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login',{_error: errorMessage}));
                }
    }
}
export const logout = () => {
    return async (dispatch) =>{
        let response = await authAPI.logout()
                if (response.data.resultCode ===0){
                    dispatch(setAuthUserData(null, null, null, false));
                }
    }
}

export default authReducer;