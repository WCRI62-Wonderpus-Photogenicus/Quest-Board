import React, {useState, useEffect} from 'react';
import {
  toggleTaskModalActionCreator
} from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { editTaskDescActionCreator, deleteTaskActionCreator } from '../actions/actions';



const TaskContainer = (props) => {
  const dispatch = useDispatch();


  const taskList = useSelector((state) => {return state.projects.taskList});
  const [descText, setDescText] = useState(taskList[props.id].desc)

  useEffect(() => {
    setDescText(taskList[props.id].desc);
  }, [props.id]);
  
 
  return (

    <div className='task-modal'>
      <div className='modal-header'>
        <button onClick={() => dispatch(deleteTaskActionCreator(props.id))}>Delete</button>
        <button onClick={() => dispatch(toggleTaskModalActionCreator(false))}>CLOSE</button>
      </div>  
      <p>{taskList[props.id].name}</p>
      <p>{descText}</p>


      <input className='desc-input' value={descText} onChange={(e) => setDescText(e.target.value)}></input>
      <button onClick={() => dispatch(editTaskDescActionCreator(props.id, descText))}>SAVE</button>


    </div>
  );
};

export default TaskContainer
