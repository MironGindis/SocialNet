import React from 'react';
import './Post.css';

const Post = (props) => {
    return <div className='MyPosts__Post'>
    <img src={props.source}/>
    {props.message}
<div className="Post__Like">Like {props.likesCount}</div>
  </div>
};

export default Post;