import React from "react";
import TaskListItem from "./TaskListItem.jsx"

import{addNewTaskActionCreator, addNewTaskNameActionCreator} from'../actions/actions.js'

import {useDispatch, useSelector} from 'react-redux';

const TaskListContainer = () => {
const dispatch = useDispatch()
const newTaskName = useSelector((state)=> state.projects.newTaskName)
const taskList = useSelector((state) => state.projects.taskList)

return(
  <div id="task-list-container">
    <input type='text' onChange={(e) => dispatch(addNewTaskNameActionCreator(e.target.value))} value={newTaskName}/>
    <button onClick={()=>dispatch(addNewTaskActionCreator())}>Add Task</button>
    {taskList.map((task, i) => (
      <TaskListItem key={i} id={i} name={task.name}/>
    ))}
  </div>
)
} 

export default TaskListContainer;