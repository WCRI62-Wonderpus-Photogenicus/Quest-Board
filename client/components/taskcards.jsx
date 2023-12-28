import React, {useState} from 'react';    

const TaskCard = (props) => {

  // taskList contains a name property which will allow it to render for now.
  // without name prop, will get errro and task wont render
  const {name} = props.taskList

  return (
   <div id='task-card' className="draggable">
    {name}
   </div>
  )
}

export default TaskCard