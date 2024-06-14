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

router.post("/", async function (req, res) {
  const questions = req.body.exam.questions;
  const totalQuestion = questions.length;
  let totalCorrectAnswers = 0;
  for (let question of questions) {
    if (question.userAnswer == question.correctAnswer) {
      totalCorrectAnswers += 1;
    }
  }
  let score = Math.ceil((totalCorrectAnswers / totalQuestion) * 990);
  answer = req.body;
  answer.score = score;
  answer.numberOfCorrectAnswers = totalCorrectAnswers;
  answer.totalQuestion = totalQuestion;
  const result = new Result(answer);
  try {
    const savedResult = await result.save();
    res.status(200).json(savedResult);
  } catch (err) {
    console.error("Error saving result:", err);
    res.status(500).json({ message: "Error save result", error });
  }
});

router.get("/by-user/:userId/test/:testId", async function (req, res) {
  try {
    console.log(
      "userId: " + req.params.userId + " testId: " + req.params.testId
    );
    const results = await Result.find({
      userId: req.params.userId,
      examId: req.params.testId,
    });
    res.status(200).json(results[results.length - 1]);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
});
module.exports = router;
