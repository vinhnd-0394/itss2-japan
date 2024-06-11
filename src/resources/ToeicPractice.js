import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ToeicPractice.css';
import { getQuestions } from './apis/api';

const ToeicPractice = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const tests = Array.from(
    { length: 16 },
    (_, i) => `Đề ${i + 1} : Luyện thi Toeic 0 - 100`
  );

  const handleDoClick = () => {
    navigate('/test');
  };

  useEffect(() => {
    async function fetchQuestion() {
      const response = await getQuestions();
      console.log(response);
      setQuestions(response);
    }
    fetchQuestion();
  }, []);

  console.log('questions', questions);
  return (
    <div className="toeic-practice">
      <div className="practice-content">
        <img
          src="/images/english-course.jpg"
          alt="English Course"
          className="practice-image"
        />
        <div className="practice-text">
          <h2>Lộ trình từ 0 đến 100 điểm TOEIC</h2>
          <p>
            ★ Lộ trình này giúp bạn lấy lại gốc tiếng anh một cách nhanh chóng
            thông qua các bài test
          </p>
        </div>
      </div>
      <div className="test-list">
        {questions?.length &&
          questions.slice(0, 10).map((item) => {
            return <div key={item._id}>{item.answer.hint}</div>;
          })}
        {/* {tests.map((test, index) => (
          <div key={index} className="test-item">
            <span>{test}</span>
            <div className="test-buttons">
              <button className="view-button">View</button>
              <button className="edit-button" onClick={handleDoClick}>
                Do
              </button>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ToeicPractice;
