import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../api/library/PostsAPI";
import Post from "./Post";
import {Link, useNavigate} from "react-router-dom";
import "./posts.css"

export default function Posts () {
    let navigate = useNavigate()
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        getAllPosts().then((data)=> {
            setPosts(data.data.data.posts)
            console.log(data.data.data.posts)
            console.log(posts)
        })
    }, [])

    let postsDiv = []
    if(posts.length > 0) {
        console.log(posts)
        postsDiv = posts.map((post)=> {
            console.log(post)
            return <Post title={post.title} image={post.img} likes={post.likes} comments={post.comments} _id={post._id}/>

        })
        console.log(postsDiv)
        console.log(postsDiv.length)
    }
    return (
        <>
            <Link to={"/newPost"}><button className="newPostButton">Create New Post</button></Link>
            <div className="posts">

                {postsDiv.length > 0 && postsDiv}
            </div>
        </>
    );
};

