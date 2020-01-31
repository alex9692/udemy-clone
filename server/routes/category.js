const express = require("express");
const router = express.Router();

const categoryCtrl = require("../controllers/category");

router.route("/").get(categoryCtrl.getAllCategories);

module.exports = router;
