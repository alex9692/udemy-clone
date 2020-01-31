const express = require("express");
const router = express.Router();

const { passport } = require("../utils/passport");
const acl = require("../utils/nacl");
const productCtrl = require("../controllers/product");

router
  .route("/")
  .get(productCtrl.getAllProducts)
  .post(
    passport.authenticate("jwt", { session: false }),
    acl.authorize,
    productCtrl.setUserId,
    productCtrl.createProduct
  );

router.get(
  "/myproducts",
  passport.authenticate("jwt", { session: false }),
  acl.authorize,
  productCtrl.setMyId,
  productCtrl.getAllProducts
);
router
  .route("/:id")
  .get(productCtrl.getProductById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    acl.authorize,
    productCtrl.checkOwnProduct,
    productCtrl.updateProduct
  );

router.route("/s/:slug").get(productCtrl.getProductBySlug);

module.exports = router;
