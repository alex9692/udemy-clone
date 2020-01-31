const express = require("express");
const router = express.Router();

const { passport } = require("../utils/passport");
const userCtrl = require("../controllers/user");

router.route("/register").post(userCtrl.register);
router.route("/login").post(userCtrl.login);
router
  .route("/me")
  .get(passport.authenticate("jwt", { session: false }), userCtrl.getMe);

module.exports = router;
