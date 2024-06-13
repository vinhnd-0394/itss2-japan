const mongoose = require("mongoose");

const questionItemSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  answers: [String],
  correctAnswer: {
    type: Number,
    required: true,
  },
  userAnswer: {
    type: Number,
  },
});
const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [questionItemSchema],
});

const resultSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    examId: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    numberOfCorrectAnswers: {
      type: Number,
      required: true,
    },
    totalQuestion: {
      type: Number,
      required: true,
    },
    exam: {
      type: examSchema,
      required: true,
    },
    taken_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "Results",
  }
);

const Result = mongoose.model("Results", resultSchema);

module.exports = Result;
