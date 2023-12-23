 import React from 'react';
 import Board from './board.jsx'; 

 const Homepage = () => {
   return (
    <div id='homepage-container'>
      <div id='progress-container'>Progress</div>
      <div id='task-list-container'>Tasks</div>
     
    <Board />
    </div>
   )
 }

 export default Homepage;