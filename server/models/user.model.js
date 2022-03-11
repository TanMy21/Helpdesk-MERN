const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please Provide firstname"],
    },
    lastname: {
      type: String,
      required: [true, "Please Provide lastname"],
    },
    organizationName: {
      type: String,
      required: [true, "Please Provide an organization name"],
      unique: [true, "organization name already exists"],
    },
    email: {
      type: String,
      required: [true, "Please provide an Email!"],
      unique: [true, "Email Already Exist"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password!"],
      unique: false,
    },
    role: {
      type: String,
      default: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, email: this.email, role: this.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
