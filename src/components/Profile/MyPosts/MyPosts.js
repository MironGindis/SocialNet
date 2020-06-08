import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, requaredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
    let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} source={post.source}/>);
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return <div>
        <div>My Posts</div>
        <AddPostFormRedux onSubmit={onAddPost}/>
        {postsElements}
    </div>
};

const maxLength10 = maxLenghtCreator(10);

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
    <div>
        <Field component={Textarea} name='newPostText' placeholder={'add new post =)'} validate={[requaredField, maxLength10]}/>
    </div>
    <div>
        <button >add post</button>
    </div>
    </form>
}
const AddPostFormRedux = reduxForm({
    form: 'NewPostText'
})(AddPostForm)

export default MyPosts;