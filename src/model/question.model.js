const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  is_correct: {
    type: Boolean,
    required: true
  }
});

const questionSchema = new mongoose.Schema({
  test_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test',
    required: true
  },
  section: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'multiple-choice', // Mặc định là 'multiple-choice'
    required: true
  },
  level: {
    type: String,
    enum: ['easy', 'medium', 'hard'], // Mức độ khó
    required: true
  },
  question_text: {
    type: String,
    required: true
  },
  options: [optionSchema],
  explanation: {
    type: String,
    required: true
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
