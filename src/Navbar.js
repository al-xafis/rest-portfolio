import React, { useState, useEffect } from 'react';
import MButton from './components/Button';
import MyButton from './components/MyButton';
import { useSelector } from 'react-redux';
import { auth } from './firebase';
import { Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import { Link } from '@material-ui/core';

const Navbar = () => {


  const user = useSelector(state => state.user.user);

  const logout = () => {
    auth.signOut()
    .catch(e => console.log(e))
  }
  
  return (
    <div className="navbar__container">
        {user ? (
           <div className="navbar">
           <Button variant="contained" onClick={logout}>Sign Out</Button>
           <MButton to="/signup">Sign Up</MButton>
         </div>
        ) : (<div className="navbar">
        <MButton to="/login">Sign In</MButton>
        <MButton to="/signup">Sign Up</MButton>
      </div>
    ) }
    </div>
  )
};

export default Navbar;