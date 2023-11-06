const Posts = require("../models/postModel");
bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const Users = require("../models/userModel");

exports.getAllPosts = async (req, res) => {
  try {
    console.log(`running get all posts`)
    const posts = await Posts.find();

    res.status(200).json({
      status: "success",
      results: posts.length,
      data: {
        posts: posts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.createPost = async (req, res) => {
  try {
    console.log(req.body)
    if(req.body.img === '') {
      req.body.img = undefined
    }
    const post = await Posts.create(req.body);
    res.status(200).json({
      status: "success",
      results: post.length,
      data: {
        user: post,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.likePost = async (req, res) => {
  try {
    console.log(req.body)
        const post = await Posts.findOneAndUpdate({ _id: req.body._id }, { $inc: { likes: 1 }});
    console.log(post)
        res.status(200).json({
          status: "success",
          data: post,
        });

  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};