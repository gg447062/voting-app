import React from 'react';

const Header = ({ children, align }) => {
  return <div className={`flex header ${align}`}>{children}</div>;
};

export default Header;
