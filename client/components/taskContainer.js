import React, {useState, useEffect} from 'react';
import {
  toggleTaskModalActionCreator
} from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { editTaskDescActionCreator } from '../actions/actions';


const TaskContainer = (props) => {
  const dispatch = useDispatch();


  const taskList = useSelector((state) => {return state.projects.taskList});
  const [descText, setDescText] = useState(taskList[props.id].desc)

  useEffect(() => {
    setDescText(taskList[props.id].desc);
  }, [props.id]);
  
  return (
    <div className='taskContainer'>
      <button onClick={() => dispatch(toggleTaskModalActionCreator(false))} >CLOSE</button>
      <p>{props.id}</p>
      <p>{descText}</p>


      <input className='desc-input' value={descText} onChange={(e) => setDescText(e.target.value)}></input>
      <button onClick={() => dispatch(editTaskDescActionCreator(props.id, descText))}>SAVE</button>


    </div>
  );
};

export default TaskContainer























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