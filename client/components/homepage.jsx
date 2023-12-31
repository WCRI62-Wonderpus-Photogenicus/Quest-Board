import React from 'react';
import Board from './board.jsx'; 
import Navbar from './navbar.jsx';
import Progressbar from './progress-bar.jsx';
import TaskListContainer from './TaskListContainer.jsx';


 const Homepage = () => {
   return (
    <div id='homepage-container'>
    <Navbar />
    {/* <div id='progress-container'>Progress:</div> */}
    {/* <div id='status-bar'>status bar</div> */}
    <Progressbar />  
    <TaskListContainer />
    <Board />
    </div>
   )
 }

 export default Homepage;