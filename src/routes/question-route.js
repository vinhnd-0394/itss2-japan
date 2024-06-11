const express = require("express");
const router = express.Router();
const Question = require("../model/question.model");
router.get("/", async function (req, res) {
  try {
    const questions = await Question.find({});
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
});

router.get("/of-test/:testId", async function (req, res) {
  try {
    const questions = await Question.find({ test_id: req.params.testId });
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
});

module.exports = router;
