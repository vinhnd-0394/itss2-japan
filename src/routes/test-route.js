const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  // Get all test

  res.send("Get all tests");
});

router.get("/by-/{}");

module.exports = router;
