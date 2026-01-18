const express = require("express");
const db = require("../db");

const router = express.Router();

// GET products
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    res.json(result);
  });
});

module.exports = router;
