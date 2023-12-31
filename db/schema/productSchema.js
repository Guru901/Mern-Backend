const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  img: String,
  companyName: String,
  productName: String,
  price: Number,
  discountedPrice: Number,
  discount: Number,
  category: String,
});
