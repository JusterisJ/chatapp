const express = require("express");

const {
  getUsersByEmail,
  getAllUsers,
  createUser,
  getUserById,
  getEmail,
  loginUser,
  updateUserById,
} = require("../controllers/usersController");

const router = express.Router();

router.route("/updateUser").patch(updateUserById);

router.route("/userByEmail").post(getUsersByEmail);
router.route("/login").post(loginUser);
router.route("/register").post(createUser);
// router.route("/email").get(getUserEmail);
router.route("/").get(getAllUsers);
router.route("/email").get(getEmail);

router.route("/:id").get(getUserById);




module.exports = router;
