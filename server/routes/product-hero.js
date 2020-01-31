const express = require("express");
const router = express.Router();

const { passport } = require("../utils/passport");
const acl = require("../utils/nacl");
const productHeroCtrl = require("../controllers/product-hero");

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    acl.authorize,
    productHeroCtrl.getProductHeroes
  )
  .post(productHeroCtrl.createProductHero);

router
  .route("/:id")
  .patch(
    passport.authenticate("jwt", { session: false }),
    acl.authorize,
    productHeroCtrl.updateProductHeroes
  );

module.exports = router;
