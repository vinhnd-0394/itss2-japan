import React from 'react';
import './ToeicResult.css';

const ToeicResult = () => {
  return (
    <div className="toeic-result">
      <div className="result-header">
        <img src="/path/to/logo.png" alt="Logo" />
        <div className="info">
          <h2>Ngô Duy Vĩnh 20205049</h2>
          <p>550 / 990</p>
          <p>Thời gian: 1 giờ 30 phút</p>
        </div>
      </div>

      <div className="part">
        <h3>Part 1: 6 / 6 câu</h3>
        <div className="question">
          <p>Câu 1. How old are you?</p>
          <div className="options">
            <div className="option incorrect">A. Hello</div>
            <div className="option correct">B. I am 20 years old</div>
            <div className="option incorrect">C. Hi, I am Vinh</div>
            <div className="option incorrect">D. I'm fine, thank you</div>
          </div>
        </div>
        <div className="question">
          <p>Câu 2. How old are you?</p>
          <div className="options">
            <div className="option incorrect">A. Hello</div>
            <div className="option correct">B. I am 20 years old</div>
            <div className="option incorrect">C. Hi, I am Vinh</div>
            <div className="option incorrect">D. I'm fine, thank you</div>
          </div>
        </div>
        <div className="question">
          <p>Câu 3. How old are you?</p>
          <div className="options">
            <div className="option incorrect">A. Hello</div>
            <div className="option correct">B. I am 20 years old</div>
            <div className="option incorrect">C. Hi, I am Vinh</div>
            <div className="option incorrect">D. I'm fine, thank you</div>
          </div>
        </div>
      </div>

      <div className="part">
        <h3>Part 2: 15 / 25 câu</h3>
        {/* Repeat similar structure for other parts */}
      </div>

      <div className="part">
        <h3>Part 3: 15 / 39 câu</h3>
        {/* Repeat similar structure for other parts */}
      </div>

      <div className="score">Score: 550 / 990</div>
      <div className="result-timer">Thời gian: 1 giờ 30 phút</div>
    </div>
  );
};

export default ToeicResult;
