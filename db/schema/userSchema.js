const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  img: String,
  role: {
    type: String,
    default: "user",
  },
});
