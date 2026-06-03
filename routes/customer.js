const express = require("express");
const Customer = require("../models/Customer");

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.json(customer);
});

// GET ALL
router.get("/", async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

module.exports = router;
