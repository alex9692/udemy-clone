const express = require("express");
const { passport } = require("../utils/passport");
const router = express.Router();

const acl = require("../utils/nacl");
const blogCtrl = require("../controllers/blog");
const userCtrl = require("../controllers/user");

router
  .route("/")
  .get(blogCtrl.getAllBlogs)
  .post(
    userCtrl.isLoggedIn,
    passport.authenticate("jwt", { session: false }),
    acl.authorize,
    blogCtrl.setUserId,
    blogCtrl.createBlog
  );

router
  .route("/myblogs")
  .get(
    passport.authenticate("jwt", { session: false }),
    acl.authorize,
    blogCtrl.setMyId,
    blogCtrl.getAllBlogs
  );

router
  .route("/:id")
  .get(blogCtrl.getBlogById)
  .patch(
    userCtrl.isLoggedIn,
    passport.authenticate("jwt", { session: false }),
    acl.authorize,
    blogCtrl.checkOwnedBlog,
    blogCtrl.updateBlog
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    acl.authorize,
    blogCtrl.checkOwnedBlog,
    blogCtrl.deleteBlog
  );

router.route("/s/:slug").get(blogCtrl.getBlogBySlug);

module.exports = router;
