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
  // res.send("Get all questions");
});
//export
module.exports = router;
