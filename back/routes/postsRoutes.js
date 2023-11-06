const express = require("express");

const {
  getAllPosts,
  createPost,
  likePost
} = require("../controllers/postsController");

const router = express.Router();


// router.route("/createPost").post(createPost);
router.route("/likePost").post(likePost);
router.route("/").get(getAllPosts);






module.exports = router;
