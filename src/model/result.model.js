const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  selected_option: {
    type: String,
    required: true,
  },
  is_correct: {
    type: Boolean,
    required: true,
  },
});

const resultSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  test_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  answers: [answerSchema],
  taken_at: {
    type: Date,
    default: Date.now,
  },{
    collection: "Results"
  }
});

const Result = mongoose.model("results", resultSchema);

module.exports = Result;
