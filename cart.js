const express = require("express");
const db = require("../db");

const router = express.Router();

// Add to cart
router.post("/", (req, res) => {
  const { product_id } = req.body;
  db.query(
    "INSERT INTO cart (product_id, quantity) VALUES (?, 1)",
    [product_id],
    () => res.json({ msg: "Added to cart" })
  );
});

// View cart
router.get("/", (req, res) => {
  db.query(
    `SELECT products.name, products.price, cart.quantity
     FROM cart
     JOIN products ON cart.product_id = products.id`,
    (err, result) => res.json(result)
  );
});

module.exports = router;
