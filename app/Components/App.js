import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Vote from './Vote';
// import GridTest from './GridTest';
import Connect from './Connect';
import Results from './Results';
import Review from './Review';

const App = () => {
  const complete = useSelector((state) => state.applications.complete);
  return (
    <main>
      <Router>
        <Routes>
          <Route path={'connect'} element={<Connect />} />
          <Route path={'/'} element={<Review />} />
          <Route path={'vote'} element={<Vote />} />
          <Route path={'results'} element={<Results />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
