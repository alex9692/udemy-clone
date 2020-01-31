const Category = require("../models/category");
const errorHandler = require("../utils/errorHandler");

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});

    res.status(200).json({
      status: "success",
      results: categories.length,
      data: {
        categories
      }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};
