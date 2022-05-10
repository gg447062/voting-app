import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vote from './Vote';
import Home from './Home';
import ThankYou from './ThankYou';
import Results from './Results';
import Overview from './Overview';
import VoteIntro from './VoteIntro';

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          {/* <Route path={'/'} element={<Home />} /> */}
          <Route path={'/'} element={<Overview />} />
          {/* <Route path={'overview'} element={<Overview />} /> */}
          <Route path={'vi'} element={<VoteIntro />} />
          <Route path={'vote'} element={<Vote />} />
          <Route path={'thankyou'} element={<ThankYou />} />
          <Route path={'results'} element={<Results />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
