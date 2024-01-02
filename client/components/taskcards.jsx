import React, { useState } from 'react';

const TaskCard = (props) => {
  
  const { name } = props.taskList;

  return (
    <div id='task-card' className={`task-card-${props.style} draggable`}>
      <div className={`card-text${props.style}`}>{name}</div>
    </div>
  );
};

export default TaskCard;
