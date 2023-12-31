const productSchema = require("../schema/productSchema");
const mongoose = require("mongoose");

module.exports = mongoose.model("product", productSchema);
