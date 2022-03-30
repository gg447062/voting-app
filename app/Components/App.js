import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vote from './Vote';
import Home from './Home';
import Results from './Results';
import Review from './Review';

const App = () => {
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
