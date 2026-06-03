const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productCode: String,
  productName: String,
  quantitySold: Number,
  unitPrice: Number
});

module.exports = mongoose.model("Product", productSchema);
