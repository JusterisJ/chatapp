const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");


// MAIN DB schema
const postsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
      maxLength: 30,
    },
    img: {
      type: String,
      required: false,
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Post_Holdings_logo.svg/1200px-Post_Holdings_logo.svg.png"
    },
    likes: {
      type: Number,
        default :0
    },
    comments: {
      type: Number,
        default :0
    },

  },
  { timestamps: true }
);


const Posts = new mongoose.model("Posts", postsSchema);

module.exports = Posts;
