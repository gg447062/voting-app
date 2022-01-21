import React, { useState } from 'react';
import Card from './Card';
import Footer from './Footer';

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
