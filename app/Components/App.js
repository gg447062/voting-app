import React from 'react';
import Card from './Card';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import Voting from './Voting';

const App = () => {
  const complete = useSelector((state) => state.applications.complete);
  return (
    <div className="tile is-ancestor is-vertical is-family-monospace">
      {!complete ? (
        <React.Fragment>
          <Card />
          <Footer />
        </React.Fragment>
      ) : (
        <Voting />
      )}
    </div>
  );
};

export default App;
