import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import MButton from './components/MyButton';
import { useSelector } from 'react-redux';
import { auth } from './firebase';
import { Link } from 'react-router-dom';
// import { Button } from '@material-ui/core';


const Navbar = () => {


  const user = useSelector(state => state.user.user);

  const logout = (e) => {
    e.preventDefault();
    auth.signOut()
    .catch(e => console.log(e))
  }
  
  return (
    <div className="navbar__container">
        {user ? (
            <div className="navbar">
              <div className="navbar__brand">
                <Link to="/" className="rest">REST</Link>
              </div>
              <div className="navbar__auth">
                <MButton variant="contained" onClick={e => logout(e)}>Sign Out</MButton>
                <Button className="signup-button" to="/signup">Sign Up</Button>
              </div>
          </div>
        ) : (<div className="navbar">
          <div className="navbar__brand">
                <Link to="/" className="rest">REST</Link>
          </div>
              <div className="navbar__auth">
                <Button to="/login">Sign In</Button>
                <Button to="/signup">Sign Up</Button>
              </div>
              
            </div>
    ) }
    </div>
  )
};

export default Navbar;