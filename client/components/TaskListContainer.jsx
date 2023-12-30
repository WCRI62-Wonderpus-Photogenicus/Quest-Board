import React from "react";
import TaskListItem from "./TaskListItem.jsx"

import{addNewTaskActionCreator, addNewTaskNameActionCreator, toggleTaskModalActionCreator} from'../actions/actions.js'

import {useDispatch, useSelector} from 'react-redux';

const TaskListContainer = () => {
const dispatch = useDispatch()
const taskList = useSelector((state) => state.projects.taskList)


return(
  <div id="task-list-container">
    <button onClick={()=> {return dispatch(addNewTaskActionCreator())}  }>Add Quest</button>
    {
    taskList.map((task, i) => (<TaskListItem key={i} id={i} name={task.name}/>))
    }
  </div>
)
} 

export default TaskListContainer;