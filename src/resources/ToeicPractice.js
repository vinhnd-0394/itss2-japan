import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ToeicPractice.css';
import { apiDownloadExamPdf, getQuestions, getTest } from './apis/api';

const ToeicPractice = () => {
  const [questions, setQuestions] = useState({});
  const [tests, setTests] = useState([]);
  const navigate = useNavigate();

  const handleDoClick = () => {
    navigate('/test');
  };

  useEffect(() => {
    async function fetchQuestion() {
      const response = await getQuestions();
      setQuestions(response);
    }
    fetchQuestion();
  }, []);

  useEffect(() => {
    async function fetchTest() {
      const response = await getTest();
      setTests(response);
    }
    fetchTest();
  }, []);

  const downloadExamPdf = async (testId) => {
    try {
      const pdfBlob = await apiDownloadExamPdf(testId);
      const url = window.URL.createObjectURL(
        new Blob([pdfBlob], { type: 'application/pdf' })
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'toeic-exam.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Failed to download PDF:', error);
    }
  };

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
        {tests.length > 0 &&
          tests.map((test) => (
            <div key={test._id} className="shadow-lg test-item">
              <span>{test.Name}</span>
              <div className="test-buttons">
                <button
                  className="view-button"
                  onClick={() => downloadExamPdf(test._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </button>
                {/* <button className="edit-button" onClick={handleDoClick}>
                  Do
                </button> */}
              </div>
            </div>
          ))}
        {tests.length > 0 &&
          tests.map((test) => (
            <div key={test._id} className="shadow-lg test-item">
              <span>{test.Name}</span>
              <div className="test-buttons">
                <button
                  className="view-button"
                  onClick={() => downloadExamPdf(test._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </button>
                {/* <button className="edit-button" onClick={handleDoClick}>
                  Do
                </button> */}
              </div>
            </div>
          ))}
        {tests.length > 0 &&
          tests.map((test) => (
            <div key={test._id} className="shadow-lg test-item">
              <span>{test.Name}</span>
              <div className="test-buttons">
                <button
                  className="view-button"
                  onClick={() => downloadExamPdf(test._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </button>
                {/* <button className="edit-button" onClick={handleDoClick}>
                  Do
                </button> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ToeicPractice;
