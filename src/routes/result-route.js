const express = require("express");
const router = express.Router();
const Result = require("../model/result.model");

router.get("/", async function (req, res) {
  try {
    const results = await Result.find({});
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
});

router.get("/by-user/:userId/test/:testId", async function (req, res) {
  try {
    const results = await Result.find({
      user_id: req.params.userId,
      test_id: req.params.testId,
    });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
});
module.exports = router;
