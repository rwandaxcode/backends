const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerNumber: String,
  firstName: String,
  lastName: String,
  telephone: String,
  address: String
});

module.exports = mongoose.model("Customer", customerSchema);
