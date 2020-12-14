import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import MyButton from './components/MyButton';
import { useSelector } from 'react-redux';
import { auth } from './firebase';
// import { Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import { Link } from '@material-ui/core';

const Navbar = () => {


  const user = useSelector(state => state.user.user);

  const logout = () => {
    auth.signOut()
    .then(() => console.log("signed out"))
    .catch(e => console.log(e))
  }
  
  return (
    <div className="navbar__container">
        {user ? (
           <div className="navbar">
           <button onClick={logout}>Sign Out</button>
           <Button to="/signup">Sign Up</Button>
         </div>
        ) : (<div className="navbar">
        <Button to="/login">Sign In</Button>
        <Button to="/signup">Sign Up</Button>
      </div>
    ) }
    </div>
  )
};

export default Navbar;