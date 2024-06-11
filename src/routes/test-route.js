const express = require("express");
const router = express.Router();
const Test = require("../model/test.model");
router.get("/", async function (req, res) {
  try {
    const tests = await Test.find({});
    res.status(200).json(tests);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving tests", error });
  }
});

// router.get("/by-/{}");
//
module.exports = router;
