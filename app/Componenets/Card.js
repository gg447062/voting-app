import React, { useEffect } from 'react';
import { getRecords } from '../Airtable';

const Card = () => {
  useEffect(() => {
    getRecords();
  }, []);
  return <div></div>;
};

export default Card;
