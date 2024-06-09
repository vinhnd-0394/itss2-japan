import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ToeicPractice.css';

const ToeicPractice = () => {
  const navigate = useNavigate();
  const tests = Array.from({ length: 16 }, (_, i) => `Đề ${i + 1} : Luyện thi Toeic 0 - 100`);

  const handleDoClick = () => {
    navigate('/test');  // Navigate to the test page
  };

  return (
    <div className="toeic-practice">
      <div className="practice-content">
        <img src="/images/english-course.jpg" alt="English Course" className="practice-image" />
        <div className="practice-text">
          <h2>Lộ trình từ 0 đến 100 điểm TOEIC</h2>
          <p>★ Lộ trình này giúp bạn lấy lại gốc tiếng anh một cách nhanh chóng thông qua các bài test</p>
        </div>
      </div>
      <div className="test-list">
        {tests.map((test, index) => (
          <div key={index} className="test-item">
            <span>{test}</span>
            <div className="test-buttons">
              <button className="view-button">View</button>
              <button className="edit-button" onClick={handleDoClick}>Do</button>  {/* Update click handler */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToeicPractice;
