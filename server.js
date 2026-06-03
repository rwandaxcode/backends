const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

const app = express();

// middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

app.use(session({
  secret: "srms_secret_key",
  resave: false,
  saveUninitialized: false
}));

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/customers", require("./routes/customer"));
app.use("/api/products", require("./routes/product"));
app.use("/api/sales", require("./routes/sale"));

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/SRMS")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
