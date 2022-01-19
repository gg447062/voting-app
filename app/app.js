import React, { useState } from 'react';
import Card from './Componenets/Card';
import Footer from './Componenets/Footer';

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
