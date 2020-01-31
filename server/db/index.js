const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/../../.env` });

let dbURI = process.env.DBURI_PRODUCTION.replace(
  "<password>",
  process.env.DBURI_PRODUCTION_PASSWORD
);
if (process.env.NODE_ENV === "development") {
  dbURI = process.env.DBURI_DEVELOPMENT;
}

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Database connected successfully");
  });
