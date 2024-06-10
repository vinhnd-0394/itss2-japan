import React from 'react';
import Header from './Header'; // Import the Header component

const Home = () => {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      <div className="font-bold text-red-500">Home Page</div>
    </div>
  );
};

export default Home;
