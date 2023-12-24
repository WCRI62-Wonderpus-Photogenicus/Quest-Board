import React, {useState} from 'react';    

const TaskCard = (props) => {
  return (
   <div id='task-card' className="draggable">
    {props.mockdb}
   </div>
  )
}

export default TaskCard