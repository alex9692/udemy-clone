const slugify = require("slugify");

const Product = require("../models/product");
const errorHandler = require("../utils/errorHandler");

exports.getAllProducts = async (req, res, next) => {
  try {
    let filter = { status: "published" };
    let select = "-_id -products -email -role";
    if (req.params.userId) {
      filter = { ...filter, user: req.params.userId };
      select = "";
    }
    const products = await Product.find(filter)
      .populate({
        path: "user",
        select: select
      })
      .populate({ path: "category" })
      .sort("-updatedAt");

    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products
      }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id)
      .populate({ path: "category" })
      .populate({ path: "user", select: "-_id -products -email -role" });
    if (!product) {
      return next(errorHandler("Product not found", "fail", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        product
      }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};

exports.getProductBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({ slug })
      .populate({ path: "category" })
      .populate({ path: "user", select: "-_id -products -email -role" });
    if (!product) {
      return next(errorHandler("Product not found", "fail", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        product
      }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        product
      }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.body.title) {
      req.body.slug = slugify(req.body.title, { lower: true });
    }

    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    })
      .populate({ path: "user" })
      .populate({ path: "category" });

    if (!product) {
      return next(errorHandler("Product not found", "fail", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        product
      }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};

exports.setUserId = (req, res, next) => {
  if (!req.body.user) {
    req.body.user = req.user.id;
  }
  next();
};

exports.setMyId = (req, res, next) => {
  req.params.userId = req.user.id;
  next();
};

exports.checkOwnProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await (await Product.findById(id)).populate({
      path: "user",
      select: "_id"
    });

    if (product.user._id.toString() !== req.user.id.toString()) {
      return next(errorHandler("You do not own this product", "fail", 403));
    }
    next();
  } catch (error) {
    return next(errorHandler(error.message));
  }
};
