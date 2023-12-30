import React from 'react';

const Navbar = () => {
  return (
    <div id='title'>
      <div className='nav-bar'>
        <div>
          <button>Sign In</button>
          <button>Sign Out</button>
        </div>
        <div>
          <input placeholder='username'></input>
          <input placeholder='password'></input>
          <input placeholder='project key (optional)'></input>
        </div>
        <button>register</button>
      </div>
    </div>
  );
};

export default Navbar;
