import React from 'react';
import { useForm } from "react-hook-form";
import {createPost, getAllPosts} from "../api/library/PostsAPI";
import {Link} from "react-router-dom";

export default function NewPost () {
    const {
        watch,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    function onSubmit(data) {
        createPost(data).then((result) => {
            console.log(result)
        })
    }
    return (
        <div>
            <Link to={"/posts"}><button>All</button></Link>
            <form className="Registration-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="reg-input"
                    type="text"
                    id="title"
                    placeholder="Title"
                    {...register("title", {
                        required: "Title required",
                        maxLength: 30,
                        minLength: 1,

                    })}
                />

                <input
                    className="reg-input"
                    type="img"
                    id="img"
                    placeholder="Image"
                    {...register("img", {
                        required: false,
                        maxLength: 50,
                        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Post_Holdings_logo.svg/1200px-Post_Holdings_logo.svg.png"

                    })}
                />

                <span className="text-danger fw-light">{errors.balance?.type === "maxLength" && "Ne daugiau kaip 10 skaičių"}</span>
                <div className="Registration-button">
                    <button type="submit">Create post</button>
                </div>
                <div className="Registration-button">
                    <button type="reset">Cancel</button>
                </div>
            </form>
        </div>
    );
};

