import React from 'react';
import {
  toggleTaskModalActionCreator
} from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const TaskContainer = () => {
  const dispatch = useDispatch();

  return (
    <div className='taskContainer'>
      <button onClick={() => dispatch(toggleTaskModalActionCreator(false))} >CLOSE</button>
      {/* <div className='task-description'>
        Task Number: {id}, Task Information: {description}
      </div>
      <form className='additional-task-info'> */}
        {/* <input type='text' onChange = {}>Enter Additional Info Here</input> */}
        {/* In state, will have a tasklist of objects, 
        within each object, when the submit is clicked, 
        will update state at the individual 
        taskList additional information key */}
        {/* <button
          type='submit'
          onClick={() => dispatch(addTaskInfoActionCreator(id))}
        >
          Submit Task Changes
        </button>
      </form>
      <button
        className='delete-task'
        onClick={() => dispatch(deletecardTaskActionCreator(id))}
      >
        Delete Task
      </button> */}
    </div>
  );
};

export default TaskContainer
