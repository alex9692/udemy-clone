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
      return next(errorHandler("Invalid email or password", "fail", 400));
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
    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRES_IN * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: req.secure || req.headers["x-forwarded-proto"] === "https"
    };
    res.cookie("jwt", token, cookieOptions);
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

exports.logout = (req, res, next) => {
  res.clearCookie("jwt");
  res.status(200).json({
    status: "success",
    message: "logout successfull"
  });
};

exports.getMe = async (req, res, next) => {
  try {
    const { id } = req.user;

    const user = await User.findById(id);
    if (!user) {
      return next(errorHandler("User not found", "fail", 404));
    }
    // let token;
    // if(req.user_cookies) {
    const token = req.user_cookies;
    // } else {

    // token = jwt.sign(
    //   {
    //     id: user.id,
    //     email: user.email
    //   },
    //   process.env.JWT_SECRET,
    //   { expiresIn: process.env.JWT_EXPIRES_IN }
    // );
    // const cookieOptions = {
    //   expires: new Date(
    //     Date.now() + process.env.COOKIE_EXPIRES_IN * 60 * 60 * 1000
    //   ),
    //   httpOnly: true,
    //   secure: req.secure || req.headers["x-forwarded-proto"] === "https"
    // };
    // res.cookie("jwt", token, cookieOptions);
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

exports.isLoggedIn = (req, res, next) => {
  if (req.cookies) {
    req.user_cookies = req.cookies.jwt;
    next();
  } else {
    res.send();
  }
};
