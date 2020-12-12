import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar">
        <Button variant="contained" color="tertiary">Sign In</Button>
        <Button variant="contained" color="primary">Sign Up</Button>
      </div>
    </div>
  )
};

export default Navbar;