const ProductHero = require("../models/product-hero");
const errorHandler = require("../utils/errorHandler");

exports.createProductHero = async (req, res, next) => {
  try {
    const productHero = await (await ProductHero.create(req.body)).populate({
      path: "product"
    });
    res.status(201).json({
      status: "success",
      data: {
        productHero
      }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};

exports.getProductHeroes = async (req, res, next) => {
  try {
    const productHeroes = await ProductHero.find({})
      .populate({ path: "product" })
      .sort("-createdAt");

    res.status(200).json({
      status: "success",
      results: productHeroes.length,
      data: { productHeroes }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};

exports.updateProductHeroes = async (req, res, next) => {
  try {
    const productHero = await ProductHero.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate({ path: "product" });
    if (!productHero) {
      return next(errorHandler("Product Hero was not found", "fail", 404));
    }
    res.status(200).json({
      status: "success",
      productHero
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};
