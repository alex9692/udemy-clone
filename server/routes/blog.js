const express = require("express");
const { passport } = require("../utils/passport");
const router = express.Router();

const acl = require("../utils/nacl");
const blogCtrl = require("../controllers/blog");

router
  .route("/")
  .get(blogCtrl.getAllBlogs)
  .post(
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
