import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RoadMap from './pages/RoadMap';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/road-map" element={<RoadMap />}></Route>
    </Routes>
  );
};

export default App;
