import React from 'react';
import Logo from './Logo';

const Header = ({ align, title, val1, val2 }) => {
  return (
    <div className={`top-align flex ${align} max-width`}>
      <Logo />
      <div>dots</div>
      <div className="light rounded-corners">
        <h2>{title}</h2>
        <p className="fs-600 ff-sans-c">{`${val1}/${val2}`}</p>
      </div>
    </div>
  );
};

export default Header;
