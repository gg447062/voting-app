import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Vote from './Vote';
// import GridTest from './GridTest';
import Home from './Home';
import Results from './Results';
import Review from './Review';

const App = () => {
  const complete = useSelector((state) => state.applications.complete);
  return (
    <main>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'review'} element={<Review />} />
          <Route path={'vote'} element={<Vote />} />
          <Route path={'results'} element={<Results />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
