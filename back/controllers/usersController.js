const Users = require("../models/userModel");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

// Gauti visus userius
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();

    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users: users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};



exports.createUser = async (req, res) => {
  req.body.img = "https://cdn-icons-png.flaticon.com/512/3106/3106773.png"
  console.log(req.body)
  try {
    const user = await Users.create(req.body);
    res.status(200).json({
      status: "success",
      results: user.length,
      data: {
        user: user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// get user BY email
exports.getUsersByEmail = async (req, res) => {
  try {
    const user = await Users.find({ email: req.body.email });

    res.status(200).json({
      status: "success",
      results: user.length,
      data: {
        users: user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//get user email

exports.getEmail = async (req, res) => {
  try {
    const user = await Users.exists(req.query);

    res.status(200).json({
      status: "success",
      results: user.length,
      data: {
        users: user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};


exports.createUser = async (req, res) => {
  req.body.img = "https://cdn-icons-png.flaticon.com/512/3106/3106773.png"
  console.log(req.body)
  try {
    console.log(req.body)

    var result = await Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const token = jwt.sign({ id: result._id }, "labas", {
      expiresIn: "90d",
    });

    //const newUser = awai`t Users.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        user: result,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        users: user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};



exports.deleteUserById = async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};




//USER

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Ar yra vartotojo vardas ir slaptažodis
  if (!email || !password) {
    return res.status(404).json({
      status: "fail",
      message: "Neįvestas prisijungimo vardas arba slaptažodis.",
    });
  }

  // 2) Randame vartotoja ir patikrinsime ar tinka passwordas
  const user = await Users.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(404).json({
      status: "fail",
      message: "Neteisingas prisijungimo vardas arba slaptažodis",
    });
  }

  const token = jwt.sign({ id: user._id }, "labas", {
    expiresIn: "90d",
  });

  res.status(200).json({
    status: "success",
    token: token,
    user: user,
  });
};

exports.protect = async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in! Please log in to get access.",
    });
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, "labas");

  // 3) Check if user still exists
  const currentUser = await Users.findById(decoded.id);
  if (!currentUser) {
    return res.status(401).json({
      status: "fail",
      message: "The user belonging to this token does no longer exist.",
    });
  }
  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
};






exports.updateUserById = async (req, res) => {
  try {
    console.log(req.body);
    const isEmailTaken = await Users.findOne({ email: req.body.email });
    console.log(isEmailTaken == true);
    if (isEmailTaken) {
      if (req.body.email == isEmailTaken.email) {
        const user = await Users.findByIdAndUpdate(req.body.id, req.body);
        res.status(200).json({
          status: "success",
          data: user,
        });
      } else {
        res.status(404).json({
          status: "fail",
          message: err,
        });
      }
    } else {
      const user = await Users.findByIdAndUpdate(req.body.id, req.body);
      res.status(200).json({
        status: "success",
        data: user,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }

  // res.status(404).json({
  //   status: "fail",
  //   message: err,
  // });

  //   res.status(404).json({
  //     status: "fail",
  //     message: err,
  //   });
  // }
};

// exports.deleteUser = async (req, res) => {
//   try {
//     await Users.findOneAndDelete({ _id: req.params.id });
//     res.status(200).json({
//       status: "success",
//       data: null,
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };
