require("../db");
const express = require("express");
const passport = require("passport");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();

const blogRoutes = require("./blog");
const userRoutes = require("./user");
const productRoutes = require("./product");
const categoryRoutes = require("./category");
const productHeroRoutes = require("./product-hero");

const errorController = require("../controllers/error");

require("../utils/passport");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());

app.use("/blogs", blogRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/product-hero", productHeroRoutes);

app.use(errorController);

module.exports = {
  path: "api/v1",
  handler: app
};
