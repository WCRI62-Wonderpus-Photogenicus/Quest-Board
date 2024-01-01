import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLoginActionCreator } from "../actions/actions.js";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      const response = await fetch('/logout', { method: 'POST', credentials: 'include' });
      if (response) {
      dispatch(toggleLoginActionCreator(false));
      }
    } catch (error) {
      console.error('Error logging out:', error);
    
    }
  };

  return (
    <div id='title'>
      <div className="nav-bar">
        <div>
          <button onClick={handleSignOut}>Sign Out</button>
        </div> 
      </div>
    </div>
  );
};

export default Navbar;