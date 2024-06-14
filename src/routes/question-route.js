const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const Question = require('../model/question.model');

router.get('/', async function (req, res) {
  try {
    const questions = await Question.find({});
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error generating PDF', error });
  }
});

router.get('/of-test/:testId', async function (req, res) {
  try {
    const question = await Question.findOne({ test_id: req.params.testId });
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: 'Error', error });
  }
});

//export
module.exports = router;
