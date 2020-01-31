const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productHeroSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product"
    },
    image: String,
    title: String,
    subtitle: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductHero", productHeroSchema);
