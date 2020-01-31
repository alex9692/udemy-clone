const dotenv = require("dotenv");
const mongoose = require("mongoose");

const data = require("./dbData");
const User = require("../models/user");
const Product = require("../models/product");
const Category = require("../models/category");
const Blog = require("../models/blog");
const ProductHero = require("../models/product-hero");

dotenv.config({ path: `${__dirname}/../../.env` });

class DB {
  constructor() {
    for (let collection in data) {
      this[collection] = data[collection];
    }
  }

  async importData() {
    try {
      await User.create(this.users);
      await Category.create(this.categories);
      await Product.create(this.products);
      console.log("data imported successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async deleteData() {
    try {
      await User.deleteMany();
      await Category.deleteMany();
      await Product.deleteMany();
      await ProductHero.deleteMany();
      await Blog.deleteMany();
      console.log("data deleted successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async seedDb() {
    try {
      await this.deleteData();
      await this.importData();
    } catch (error) {
      console.log(error);
    }
  }
}

let dbURI = process.env.DBURI_PRODUCTION.replace(
  "<password>",
  process.env.DBURI_PRODUCTION_PASSWORD
);
if (process.env.NODE_ENV === "development") {
  dbURI = process.env.DBURI_DEVELOPMENT;
}
console.log(process.env.NODE_ENV);
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(async () => {
    const db = new DB();
    await db.seedDb();
    console.log("You can now close connection");
  })
  .catch(error => console.log(error));

// $env:NODE_ENV="production"
