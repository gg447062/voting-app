import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vote from './Vote';
import Home from './Home';
import Results from './Results';
import Overview from './Overview';

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          {/* <Route path={'/'} element={<Home />} /> */}
          <Route path={'/'} element={<Overview />} />
          {/* <Route path={'review'} element={<Overview />} /> */}
          <Route path={'vote'} element={<Vote />} />
          <Route path={'results'} element={<Results />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
