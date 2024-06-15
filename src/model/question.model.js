const mongoose = require("mongoose");
const questionItemSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  answers: [String],
  correctAnswer: {
    type: Number,
    required: true,
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
  sections: [String],
  questions: [questionItemSchema],
});

const questionSchema = new mongoose.Schema(
  {
    test_id: {
      type: String,
      required: true,
    },
    exam: {
      type: examSchema,
      required: true,
    },
  },
  {
    collection: "Questions",
  }
);

const Question = mongoose.model("Questions", questionSchema);

module.exports = Question;
