import React from 'react';
import Logo from './Logo';

const Header = ({ align, title, val1, val2 }) => {
  return (
    <div className={`top-align flex ${align} max-width`}>
      <Logo />
      <div>dots</div>
      <div>
        <h2>{title}</h2>
        <p>{`${val1}/${val2}`}</p>
      </div>
    </div>
  );
};

export default Header;
