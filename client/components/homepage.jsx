import React from 'react';
import Board from './board.jsx'; 
import Navbar from './navbar.jsx';
import Progressbar from './progress-bar.jsx';
import TaskListContainer from './TaskListContainer.jsx';
import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateTaskListActionCreator } from "../actions/actions.js";


 const Homepage = () => {
  const loginStatus = useSelector(state=> state.loginStatus)
  const projectsId = useSelector(state => state.projects.projectsId)
  const dispatch = useDispatch()

//requesting for projectId from db to be rendered on homepage
const getProjects = async () => {
  try{
    const requestOptions = {
      method: "POST",
      headers:  { "Content-Type": "application/json" },
      body: JSON.stringify({projectsId}),
    };
  
    const response = await fetch("/update", requestOptions)
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Error from server');

    dispatch(updateTaskListActionCreator(data.taskList))
  } catch (error) {
    console.log("error accessing database")
  }
}
  useEffect(()=>{
    getProjects()
  })

   return (
    <div id='homepage-container'>
    <Navbar />
    <Progressbar />  
    <TaskListContainer />
    <Board />
    </div>
   )
 }

 export default Homepage;