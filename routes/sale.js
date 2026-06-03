
const express = require("express");
const Sale = require("../models/Sale");

const router = express.Router();

// CREATE SALE
router.post("/", async (req, res) => {
  const sale = new Sale(req.body);
  await sale.save();
  res.json(sale);
});

// GET ALL SALES
router.get("/", async (req, res) => {
  const sales = await Sale.find()
    .populate("customer")
    .populate("product");

  res.json(sales);
});

// UPDATE SALE
router.put("/:id", async (req, res) => {
  const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(sale);
});

// DELETE SALE
router.delete("/:id", async (req, res) => {
  await Sale.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
