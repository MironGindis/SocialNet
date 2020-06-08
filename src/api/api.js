import * as axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '6bdc48f4-a9b1-4db5-9981-179668bf2ca7'
    }
})
export const usersAPI = {
    getUsers(pageSize, currentPage) {
        return instanse.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    follow(userID) {
        return instanse.post(`follow/${userID}`)

    },
    unfollow(userID) {
        return instanse.delete(`follow/${userID}`)
    },
}
export const profileAPI = {
    getProfile(usersId) {
        return instanse.get(`profile/${usersId}`)
    },
    getStatus(usersId) {
        return instanse.get(`profile/status/${usersId}`)
    },
    updateStatus(status) {
        return instanse.put(`profile/status`, { status: status})
    },
}
export const authAPI = {
    authMe(){
        return instanse.get(`auth/me`)
    },
    login(email, password, rememberMe = false){
        return instanse.post(`/auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instanse.delete(`/auth/login`)
    }
}