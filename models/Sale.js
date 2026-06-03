const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  invoiceNumber: String,
  salesDate: Date,
  paymentMethod: String,
  totalAmountPaid: Number,

  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer"
  },

  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }
});

module.exports = mongoose.model("Sale", saleSchema);
