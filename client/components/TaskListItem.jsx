import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskModalActionCreator } from "../actions/actions.js"

const TaskListItem = (props) => {
  const dispatch = useDispatch()
  const renderTab = useSelector((state)=> state.projects.taskModalBoolean)
  return (
    <div className="task-list-item">
      <p>{props.id + 1}. {props.name}</p>
      <button onClick={() => { console.log(renderTab); dispatch(toggleTaskModalActionCreator(true)); console.log(renderTab)}}>test</button>
    </div>
  )
}

export default TaskListItem;