const slugify = require("slugify");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    slug: {
      type: String,
      unique: true,
      sparse: true
    },
    title: {
      type: String,
      maxlength: 96,
      required: true
    },
    subtitle: {
      type: String
    },
    content: {
      type: String,
      required: true
    },
    featured: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      enum: ["active", "inactive", "deleted", "published"],
      default: "active"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

blogSchema.pre("save", function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model("Blog", blogSchema);
