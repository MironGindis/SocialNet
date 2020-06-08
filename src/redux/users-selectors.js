export const getUsers = (state) => {
    return state.usersPage.users;
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowingNiProgress = (state) => {
    return state.usersPage.followingNiProgress;
}
