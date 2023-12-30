import React, {useState, useEffect} from 'react';
import { toggleTaskModalActionCreator} from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { editTaskDescActionCreator, deleteTaskActionCreator, addNewTaskNameActionCreator, updateTaskListActionCreator } from '../actions/actions';

// const useInput = ({ start }) => {
//   const [value, setValue] = useState(start);
//   const onChange = (e) => {
//     setValue(e.target.value);
//   };
//   return [value, onChange];
// };

const TaskContainer = (props) => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => {return state.projects.taskList});
  const projectsId = useSelector((state) => state.projects.projectsId)
  const newTaskName = useSelector((state)=> state.projects.newTaskName)
  const taskEditBoolean = useSelector((state) => state.projects.taskEditBoolean);
  const [edit, setEdit] = useState(taskEditBoolean);
  const [create, setCreate] = useState(false);
  const [name, setTaskName] = useState(taskList[props.id].name || '')
  const [desc, setDescText] = useState(taskList[props.id].desc || '')
 
 
  //This use effect is keeping our task modal subscribed to the id associated with the tasklist item.
  //this allows us 
  useEffect(() => {
    setDescText(taskList[props.id].desc);
  }, [props.id]);
  
  const dbCreateTask = async (projectsId, desc, name) => {
    try {
    const requestOptions = {
      method: "POST",
      headers:  { "Content-Type": "application/json" },
      body: JSON.stringify({projectsId: projectsId, desc: desc, name: name })
    };
    console.log(requestOptions.body)
    const response = await fetch('/newtask', requestOptions)
    const data = await response.json();

    if (!response.ok) throw new Error(data.message || 'Error from server');
    
    dispatch(toggleTaskModalActionCreator(false))
    dispatch(updateTaskListActionCreator(data.taskList))
    } catch (error) {
        console.log('error accessing database')
    }
  }

    
  const dbUpdatedTask = async (desc, name) => {
    try {
    const requestOptions = {
      method: "POST",
      headers:  { "Content-Type": "application/json" },
      body: JSON.stringify({projectsId: projectsId, desc: desc, name: name, tasksId: taskList[props.id].tasks_id})
    };
    console.log(requestOptions.body)
    const response = await fetch('/updatetask', requestOptions)
    const data = await response.json();

    if (!response.ok) throw new Error(data.message || 'Error from server');
    
    dispatch(toggleTaskModalActionCreator(false))
    dispatch(updateTaskListActionCreator(data.taskList))
    } catch (error) {
        console.log('error accessing database')
    }
  }
 
  
  const dbDeleteTask = async (projectsId, tasksId) => {
    try {
    const requestOptions = {
      method: "POST",
      headers:  { "Content-Type": "application/json" },
      body: JSON.stringify({projectsId: projectsId, tasksId: tasksId})
    };
    const response = await fetch('/deletetask', requestOptions)
    const data = await response.json();

    if (!response.ok) throw new Error(data.message || 'Error from server');

    dispatch(toggleTaskModalActionCreator(false))
    dispatch(updateTaskListActionCreator(data.taskList))
    
    } catch (error) {
        console.log('error accessing database')
    }
  }


  const renderTaskModal = () => {
    return ( 
      <div>
      <div className='modal-header'>
       <button onClick={()=> dbDeleteTask(projectsId, taskList[props.id].tasks_id)}>Delete</button>
       <button onClick={() => dispatch(toggleTaskModalActionCreator(false))}>X</button>
       <button onClick={() => setEdit(true)}>Edit</button>
     </div> 
     <h1>{name}</h1>
     <p>{desc}</p>
   </div>
    )
  }


  const renderEditTask = () => {  
    return (
    <div>
      <button onClick={() => dispatch(toggleTaskModalActionCreator(false))}>X</button>
      <button onClick={() => setEdit(false)}>CANCEL</button>
      
      <input /*value={name}*/ placeholder={name} onChange={(e) => setTaskName(e.target.value)}></input>
      <input /*value={desc}*/ placeholder={desc} onChange={(e) => setDescText(e.target.value)}></input>

      <button onClick={() => taskList[props.id].tasks_id ? dbUpdatedTask(desc, name) : dbCreateTask(projectsId, desc, name)}>SAVE</button>
    </div>
    )
  }


  // const renderCreateTask = () => {
  //   return(
  //   <div>

  //   </div>
  //   )
  // }


  return (
    <div className="task-modal">
      {(edit) ? renderEditTask() : renderTaskModal()}
    </div>
  );



  // return (
  //   <div className='task-modal'>

  //     <input type='text' onChange={(e) => setTaskName(e.target.value)} placeholder={name}></input>   

  //     <div className='modal-header'>
  //       <button onClick={()=> deleteTask(projectsId, taskList[props.id].tasks_id)}>Delete</button>
  //       <button onClick={() => dispatch(toggleTaskModalActionCreator(false))}>CLOSE</button>
  //     </div> 

  //     <input className='desc-input' value={desc} onChange={(e) => setDescText(e.target.value)} placeholder={desc}></input>
  //     <button onClick={()=> saveTaskToDB(projectsId, desc, name)}>SAVE</button>
  //   </div>
  // );
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