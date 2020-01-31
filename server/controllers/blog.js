const slugify = require("slugify");
const Blog = require("../models/blog");
const errorHandler = require("../utils/errorHandler");

exports.getAllBlogs = async (req, res, next) => {
  try {
    // let filters = { status: "published" };
    let filters = {};
    if (req.query.filter) {
      filters = { filters, ...req.query.filter };
    }
    if (req.params.userId) {
      filters = { user: req.params.userId };
    }
    let sort = "-createdAt";
    const page = req.query.page || 1;
    const limit = req.query.limit || 100;
    const skip = (page - 1) * limit;
    const blogs = await Blog.find(filters)
      .populate({
        path: "user",
        select: "-_id -products -email -role"
      })
      .skip(skip)
      .limit(limit)
      .sort(sort);

    res.status(200).json({
      status: "success",
      results: blogs.length,
      data: {
        blogs
      }
    });
  } catch (err) {
    next(errorHandler(err.message));
  }
};

exports.createBlog = async (req, res, next) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        blog
      }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};

exports.getBlogById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id).populate({
      path: "user",
      select: "-_id -products -email -role"
    });
    if (!blog) {
      return next(errorHandler("Sorry,Blog doesn't exist", "fail", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        blog
      }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};

exports.getBlogBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    console.log(slug);
    const blog = await Blog.findOne({ slug }).populate({
      path: "user",
      select: "-_id -products -email -role"
    });
    if (!blog) {
      return next(errorHandler("Sorry,Blog doesn't exist", "fail", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        blog
      }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};
exports.updateBlog = async (req, res, next) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title, { lower: true });
    }
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate({
      path: "user",
      select: "_id"
    });
    if (!blog) {
      return next(errorHandler("Blog doesn't exist", "fail", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        blog
      }
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};
exports.deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return next(errorHandler("Blog doesn't exist", "fail", 404));
    }
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};

exports.checkOwnedBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id).populate({
      path: "user",
      select: "_id"
    });
    if (!blog) {
      return next(errorHandler("Blog doesn't exist", "fail", 404));
    }
    if (blog.user._id.toString() !== req.user.id.toString()) {
      return next(errorHandler("You do not own this article", "fail", 403));
    }
    next();
  } catch (error) {
    return next(errorHandler(error.message));
  }
};

exports.setMyId = (req, res, next) => {
  req.params.userId = req.user.id;
  next();
};

exports.setUserId = (req, res, next) => {
  if (!req.body.user) {
    req.body.user = req.user.id;
  }
  next();
};
