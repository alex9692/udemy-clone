const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    avatar: {
      type: String,
      default: "https://image.flaticon.com/icons/svg/747/747376.svg"
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    name: {
      type: String,
      required: true,
      minlength: [4, "Too short, mininmum length is 4 characters"]
    },
    username: {
      type: String,
      required: true,
      minlength: [3, "Too short, mininmum length is 3 characters"]
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Too short, minimum length is 8 characters"],
      select: false
    },
    role: {
      type: String,
      enum: ["guest", "admin"],
      default: "guest"
    },
    info: String
  },
  { timestamps: true }
);

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.verifyPassword = async function(
  userPassword,
  inputPassword
) {
  return await bcrypt.compare(inputPassword, userPassword);
};

module.exports = mongoose.model("User", userSchema);
