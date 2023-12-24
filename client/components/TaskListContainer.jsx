import React from "react";
import TaskListItem from "./TaskListItem.jsx"

const TaskListContainer = () => {
const taskList = [
  {id: 1, name: "Eat", desc: "eat food"},
  {id: 2, name: "Code", desc: "test"},
  {id: 3, name: "Sleep", desc: "test2"},
  {id: 4, name: "Repeat", desc: "test3"}
]

return(
  <div className="taskListContainer">
    {taskList.map((el, i) => {
      <TaskListItem id={i} name={el.name} desc={el.desc} />
    })}
  </div>
)

} 

export default TaskListContainer;