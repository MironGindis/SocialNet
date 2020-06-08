import React from 'react';
import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText : state.profilePage.newPostText,
        postsData: state.profilePage.postsData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => dispatch(addPost(newPostText)),
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

