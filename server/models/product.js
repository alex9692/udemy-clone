const slugify = require("slugify");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    slug: {
      type: String,
      unique: true,
      sparse: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    image: String,
    description: String,
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    wsl: [
      {
        type: Schema.Types.Mixed,
        value: String
      }
    ],
    requirements: [
      {
        type: Schema.Types.Mixed,
        value: String
      }
    ],
    promoVideoLink: String,
    productLink: String,
    price: Number,
    discountedPrice: Number,
    status: {
      type: String,
      enum: ["active", "inactive", "deleted", "published"],
      default: "active"
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

productSchema.pre("save", function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model("Product", productSchema);
