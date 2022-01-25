import React from 'react';
import Card from './Card';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import Voting from './Voting';
import Card2 from './Card-2';

const App = () => {
  const complete = useSelector((state) => state.applications.complete);
  return (
    <div className="main tile is-ancestor is-vertical is-family-monospace">
      {!complete ? (
        <React.Fragment>
          {/* <Card /> */}
          <Card2 />
          <Footer />
        </React.Fragment>
      ) : (
        <Voting />
      )}
    </div>
  );
};

export default App;
