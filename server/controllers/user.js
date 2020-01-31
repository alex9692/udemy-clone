const jwt = require("jsonwebtoken");

const User = require("../models/user");
const errorHandler = require("../utils/errorHandler");

exports.register = async (req, res, next) => {
  try {
    const errors = [];
    if (!req.body.email) {
      errors.push("email is required");
    }
    if (!req.body.password) {
      errors.push("password is required");
    }
    if (!req.body.name) {
      errors.push("name is required");
    }
    if (!req.body.username) {
      errors.push("username is required");
    }
    if (Object.keys(errors).length) {
      return next(errorHandler(errors.join(","), "fail", 400));
    }
    const user = await User.create(req.body);
    user.password = undefined;
    res.status(201).json({
      status: "success",
      data: {
        user
      }
    });
  } catch (err) {
    return next(errorHandler(err.message));
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(
        errorHandler("Please provide email and password", "fail", 400)
      );
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.verifyPassword(user.password, password))) {
      return next(errorHandler("Invalid email or password", "fail", 401));
    }
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    user.password = undefined;
    res.status(200).json({
      status: "success",
      data: {
        token,
        user
      }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const { id } = req.user;

    const user = await User.findById(id);
    if (!user) {
      return next(errorHandler("User not found", "fail", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        user
      }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};
