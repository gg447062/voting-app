import React, { useState } from 'react';
import Card from './Components/Card';
import Footer from './Components/Footer';

const App = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <Card current={current} />
      <Footer current={current} setCurrent={setCurrent} />
    </div>
  );
};

export default App;
