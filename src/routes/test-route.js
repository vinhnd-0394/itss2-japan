const express = require("express");
const router = express.Router();
const Test = require("../model/test.model");
const Question = require("../model/question.model");
const PDFDocument = require('pdfkit');
const path = require('path');
router.get("/", async function (req, res) {
  try {
    const tests = await Test.find({});
    res.status(200).json(tests);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving tests", err });
  }
});

router.get('/of-roadmap/:id', async function (req, res) {
  try {
    const tests = await Test.find({roadmap_id: req.params.id});
    res.status(200).json(tests);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving tests", err });
  }
});

router.get('/:testId/download', async function (req, res) {
  try {
    const questions = await Question.findOne({ test_id: req.params.testId });
    function createPdf(data, res) {
      const doc = new PDFDocument();
      doc.fontSize(20).text(data.exam.name, { align: 'center' });
      doc.moveDown();
      doc.fontSize(12).text(data.exam.description, { align: 'center' });
      doc.moveDown();

      let questionNumber = 1;
      data.exam.questions.forEach((question) => {
        doc.fontSize(14).text(`Q${questionNumber}. ${question.questionText}`);
        question.answers.forEach((answer, index) => {
          const answerLabel = String.fromCharCode(65 + index);
          doc.fontSize(12).text(`${answerLabel}. ${answer}`, { indent: 20 });
        });
        doc.moveDown();
        questionNumber++;
      });

      res.setHeader(
        'Content-Disposition',
        'attachment; filename=toeic-exam.pdf'
      );
      res.setHeader('Content-Type', 'application/pdf');
      doc.pipe(res);
      doc.end();
    }
    createPdf(questions, res);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ message: 'Error generating PDF', error });
  }
});

module.exports = router;
