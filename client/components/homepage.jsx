 import React from 'react';
 import Board from './board.jsx'; 
 import Navbar from './navbar.jsx';
import Progressbar from './progress-bar.jsx';

 const Homepage = () => {
   return (
    <div id='homepage-container'>
    <Navbar />
      <div id='progress-container'>Progress:</div>
      <div id='status-bar'>status bar</div>
    {/* <Progressbar />   */}
      <div id='task-list-container'>Tasks</div>
    <Board />
    </div>
   )
 }

 export default Homepage;