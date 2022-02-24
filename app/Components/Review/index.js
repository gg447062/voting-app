import React from 'react';
import Card from './Card';
import Carousel from './Carousel';
import Top10 from './Top10';

const Review = () => {
  return (
    <div className="grid container main-grid">
      <Top10 />
      <Card />
      <Carousel />
    </div>
  );
};

export default Review;
