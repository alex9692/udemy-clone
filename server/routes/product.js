const express = require("express");
const router = express.Router();

const { passport } = require("../utils/passport");
const acl = require("../utils/nacl");
const productCtrl = require("../controllers/product");
const userCtrl = require("../controllers/user");

router
  .route("/")
  .get(productCtrl.getAllProducts)
  .post(
    userCtrl.isLoggedIn,
    passport.authenticate("jwt", { session: false }),
    acl.authorize,
    productCtrl.setUserId,
    productCtrl.createProduct
  );

router
  .route("/myproducts")
  .get(
    userCtrl.isLoggedIn,
    passport.authenticate("jwt", { session: false }),
    acl.authorize,
    productCtrl.setMyId,
    productCtrl.getAllProducts
  );
router
  .route("/:id")
  .get(productCtrl.getProductById)
  .patch(
    userCtrl.isLoggedIn,
    passport.authenticate("jwt", { session: false }),
    acl.authorize,
    productCtrl.checkOwnProduct,
    productCtrl.updateProduct
  );

router.route("/s/:slug").get(productCtrl.getProductBySlug);

module.exports = router;
