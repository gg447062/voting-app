import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Vote from './Vote';
import Review from './Review';
import Connect from './Connect';

const App = () => {
  const complete = useSelector((state) => state.applications.complete);
  return (
    <main className="tile is-ancestor is-vertical is-family-monospace">
      {/* <main className="is-family-monospace"> */}
      <Router>
        <Routes>
          {/* <Route path={'/'} element={<Connect />} /> */}
          <Route path={'/'} element={<Review />} />
          <Route path={'vote'} element={<Vote />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
