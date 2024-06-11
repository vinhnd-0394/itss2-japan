const express = require("express");
const router = express.Router();
const Result = require("../model/result.model");

router.get("/", async function (req, res) {
  try {
    const results = await Result.find({});
    console.log(results);
    console.log(results);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
});
//
module.exports = router;
