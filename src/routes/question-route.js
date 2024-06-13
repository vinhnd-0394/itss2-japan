const express = require('express');
const router = express.Router();
const fs = require('fs');
const PDFDocument = require('pdfkit');
const Question = require('../model/question.model');
const data = {
  exam: {
    name: 'TOEIC Sample Test',
    description:
      'This is a sample TOEIC test consisting of listening and reading sections.',
    sections: ['Listening', 'Reading'],
    questions: [
      {
        section: 'Listening',
        questionText: 'What is the speaker mainly discussing?',
        answers: [
          'A recent event',
          'A weather forecast',
          'A business plan',
          'A traffic update',
        ],
        correctAnswer: 1,
      },
      {
        section: 'Listening',
        questionText: 'What does the speaker ask the listener to do?',
        answers: [
          'Attend a meeting',
          'Call a client',
          'Review a document',
          'Send an email',
        ],
        correctAnswer: 0,
      },
      {
        section: 'Listening',
        questionText: 'Where is the conversation most likely taking place?',
        answers: [
          'In an office',
          'In a restaurant',
          'At a train station',
          'In a store',
        ],
        correctAnswer: 2,
      },
      {
        section: 'Listening',
        questionText: 'What will the speaker do next?',
        answers: [
          'Make a phone call',
          'Visit a client',
          'Start a meeting',
          'Send an email',
        ],
        correctAnswer: 3,
      },
      {
        section: 'Listening',
        questionText: 'What is the problem that the speaker mentions?',
        answers: [
          'A delayed delivery',
          'A missed appointment',
          'A billing error',
          'A product defect',
        ],
        correctAnswer: 0,
      },
      {
        section: 'Reading',
        questionText:
          'According to the passage, what is the main benefit of the new policy?',
        answers: [
          'Increased productivity',
          'Cost savings',
          'Improved employee satisfaction',
          'Better customer service',
        ],
        correctAnswer: 2,
      },
      {
        section: 'Reading',
        questionText:
          'Which of the following is NOT mentioned as a feature of the new software?',
        answers: [
          'User-friendly interface',
          'Advanced security features',
          'Automatic updates',
          'Low cost',
        ],
        correctAnswer: 3,
      },
      {
        section: 'Reading',
        questionText:
          'What does the author suggest to improve the current situation?',
        answers: [
          'Hiring more staff',
          'Upgrading equipment',
          'Implementing new training programs',
          'Reducing costs',
        ],
        correctAnswer: 1,
      },
      {
        section: 'Reading',
        questionText: 'What is the primary purpose of the email?',
        answers: [
          'To confirm a meeting',
          'To provide an update',
          'To request information',
          'To make a complaint',
        ],
        correctAnswer: 2,
      },
      {
        section: 'Reading',
        questionText: 'In the advertisement, what is the special offer?',
        answers: [
          'Buy one get one free',
          '20% off for new customers',
          'Free shipping on all orders',
          'A free gift with purchase',
        ],
        correctAnswer: 0,
      },
    ],
  },
};

router.get('/', async function (req, res) {
  try {
    // const questions = await Question.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
  // res.send("Get all questions");
});

router.get('/download', async function (req, res) {
  try {
    function createPdf(data, res) {
      const doc = new PDFDocument();
      res.setHeader(
        'Content-Disposition',
        'attachment; filename=toeic-exam.pdf'
      );
      res.setHeader('Content-Type', 'application/pdf');
      doc.pipe(res);

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

      doc.end();
    }

    createPdf(data, res);
  } catch (error) {
    res.status(500).json({ message: 'Error generating PDF', error });
  }
});

//export
module.exports = router;
