import React from 'react';
import './css/Header.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/">Home</Link>
        <Link to="/">Take Quiz</Link>
        <Link to="/">View Results</Link>
        <Link to="/road-map">View Roadmap</Link>
      </div>
    </div>
  );
};

export default Header;
