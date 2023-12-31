import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskModalActionCreator } from "../actions/actions.js"

const TaskListItem = (props) => {
  const dispatch = useDispatch()
  const renderTab = useSelector((state)=> state.projects.taskModalBoolean)
  return (
    <li className="task-list-item" onClick={() => { dispatch(toggleTaskModalActionCreator(true, props.id))}}>
      <p id='task'>{props.id + 1}. {props.name}</p>
      {/* <button onClick={() => { dispatch(toggleTaskModalActionCreator(true, props.id))}}>test</button> */}
    </li>
  )
}

export default TaskListItem;