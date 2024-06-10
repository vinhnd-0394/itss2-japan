import React from 'react';
import Header from './Header'; // Import the Header component
import './css/RoadMap.css'; // Import the CSS file

const courses = [
  {
    id: 1,
    image: './img/1.jpg',
    name: 'Beginner English',
    milestone: 'A1 Level',
    goal: 'Basic communication skills'
  },
  {
    id: 2,
    image: './img/2.jpg',
    name: 'Intermediate English',
    milestone: 'B1 Level',
    goal: 'Conversational fluency'
  },
  {
    id: 3,
    image: './img/1.jpg',
    name: 'Advanced English',
    milestone: 'C1 Level',
    goal: 'Professional proficiency'
  },
  {
    id: 4,
    image: './img/2.jpg',
    name: 'English for Business',
    milestone: 'B2 Level',
    goal: 'Business communication'
  },
  {
    id: 5,
    image: './img/1.jpg',
    name: 'English for Travel',
    milestone: 'A2 Level',
    goal: 'Travel and tourism'
  },
  {
    id: 6,
    image: './img/2.jpg',
    name: 'TOEFL Preparation',
    milestone: 'C1 Level',
    goal: 'TOEFL exam readiness'
  },
  // Add more courses as needed
];

const RoadMap = () => {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      <div className="roadmap-container">
        <div className="font-bold text-red-500">Roadmap</div>
        <div className="course-grid">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.name} className="course-image" />
              <h3 className="course-name">{course.name}</h3>
              <p className="course-milestone">{course.milestone}</p>
              <p className="course-goal">{course.goal}</p>
              <button className="view-details-button">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
