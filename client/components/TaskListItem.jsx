import React from "react";

const TaskListItem = (props) => {



  return (
    <div className="taskListItem">
      <h1>{props.name}</h1>
      <h3>{props.desc}</h3>
    </div>
  )
}

export default TaskListItem;