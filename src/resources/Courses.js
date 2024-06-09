import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const courses = [
  { id: 1, level: 'Mới bắt đầu', score: '0->100 Điểm', description: 'Lấy lại gốc tiếng anh\nnhanh chóng', progress: '12/30' },
  { id: 2, level: 'Mới bắt đầu', score: '0->100 Điểm', description: 'Lấy lại gốc tiếng anh\nnhanh chóng', progress: '12/30' },
  { id: 3, level: 'Mới bắt đầu', score: '0->100 Điểm', description: 'Lấy lại gốc tiếng anh\nnhanh chóng', progress: '12/30' },
  { id: 4, level: 'Trung bình', score: '0->100 Điểm', description: 'Lấy lại gốc tiếng anh\nnhanh chóng', progress: '12/30' },
  { id: 5, level: 'Trung bình', score: '0->100 Điểm', description: 'Lấy lại gốc tiếng anh\nnhanh chóng', progress: '12/30' },
  { id: 6, level: 'Trung bình', score: '0->100 Điểm', description: 'Lấy lại gốc tiếng anh\nnhanh chóng', progress: '12/30' },
  { id: 7, level: 'Khá', score: '0->100 Điểm', description: 'Lấy lại gốc tiếng anh\nnhanh chóng', progress: '12/30' },
  { id: 8, level: 'Khá', score: '0->100 Điểm', description: 'Lấy lại gốc tiếng anh\nnhanh chóng', progress: '12/30' },
  { id: 9, level: 'Khá', score: '0->100 Điểm', description: 'Lấy lại gốc tiếng anh\nnhanh chóng', progress: '12/30' },
];

const Courses = () => {
  const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate('/toeic-practice');
  };

  const renderCourses = (level) => {
    return courses.filter(course => course.level === level).map(course => (
      <div key={course.id} className="course-card" onClick={handleCourseClick}>
        <img src="/images/english-course.jpg" alt="English Course" />
        <div className="course-info">
          <div className="info-part1">
            <h3>{course.score}</h3>
            <div className="divider"></div>
            <p>{course.description.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</p>
          </div>
          <div className="progress-container">
            <span className="progress">{course.progress}</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="courses-container">
      <section>
        <h2>Mới bắt đầu</h2>
        <div className="courses">{renderCourses('Mới bắt đầu')}</div>
      </section>
      <section>
        <h2>Trung bình</h2>
        <div className="courses">{renderCourses('Trung bình')}</div>
      </section>
      <section>
        <h2>Khá</h2>
        <div className="courses">{renderCourses('Khá')}</div>
      </section>
    </div>
  );
};

export default Courses;
