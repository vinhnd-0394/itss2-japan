import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './Courses';
import ToeicPractice from './ToeicPractice';
import TestPage from './TestPage';  // Import the new TestPage component
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/toeic-practice" element={<ToeicPractice />} />
          <Route path="/test" element={<TestPage />} />  // Add the new route
        </Routes>
      </div>
    </Router>
  );
}

export default App;
