import React from 'react';
import {likePost} from "../api/library/PostsAPI";

export default function Post ({title, image, likes, comments, _id}) {
    console.log(image)

    return (
        <div className="post">
            <div><img src={image} alt=""/></div>
            <div className="ml20">{title}</div>
            <div className="ml20">Likes: {likes}</div>
            <div className="ml20">Comments: {comments}</div>
            <button onClick={(()=> {likePost(_id)})} className="buttonLike">Like</button>
        </div>
    );
};

