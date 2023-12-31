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
  const userId = useSelector((state) => state.projects.userId)
  const newTaskName = useSelector((state)=> state.projects.newTaskName)
  const taskEditBoolean = useSelector((state) => state.projects.taskEditBoolean);
  const [edit, setEdit] = useState(taskEditBoolean);
  const [name, setTaskName] = useState(taskList[props.id].name)
  const [desc, setDescText] = useState(taskList[props.id].desc)
  const [assignedUsers, setAssignedUsers] = useState(taskList[props.id].assignedUsers)
 
 
  //This use effect is keeping our task modal subscrto the id associated with the tasklist item.
  //this allows us to click on other TaskListItems in the TaskListContainer to switch between them without closing the current modal
  useEffect(() => {
    setDescText(taskList[props.id].desc);
    setTaskName(taskList[props.id].name);
    setAssignedUsers(taskList[props.id].assignedUsers);
 
  }, [props.id, taskList]);
  
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
  };

  const assignSelfToTask = async (tasksId) => {
    try {
      const requestOptions = {
        method: "POST",
        headers:  { "Content-Type": "application/json" },
        body: JSON.stringify({projectsId: projectsId, tasksId: tasksId, userId: userId})
      };
      const response = await fetch('/assign', requestOptions)
      const data = await response.json();
  
      if (!response.ok) throw new Error(data.message || 'Error from server');

      dispatch(updateTaskListActionCreator(data.taskList));
    } catch (error) {
      console.log('error accessing database')
    }
  };


  const renderTaskModal = () => {
    return ( 
      <div className="task-modal">
      <div className='modal-header'>
       <button onClick={()=> dbDeleteTask(projectsId, taskList[props.id].tasks_id)}>Delete</button>
       <button onClick={() => dispatch(toggleTaskModalActionCreator(false))}>X</button>
       <button onClick={() => setEdit(true)}>Edit</button>
     </div> 
     <h1>{name}</h1>
     <pre className="desc-input">{desc}</pre>
     <p>Assigned users: {(assignedUsers && assignedUsers.length > 0) ? assignedUsers.join(', ') : 'No one yet!'}</p>
     <button onClick={() => assignSelfToTask(taskList[props.id].tasks_id)}>Put me in, Coach!</button>
   </div>
    )
  };


  const renderEditTask = () => {  
    return (
    <div className="task-modal">
      <button onClick={() => dispatch(toggleTaskModalActionCreator(false))}>X</button>
      <button onClick={() => setEdit(false)}>CANCEL</button>
      
      <input value={name}  onChange={(e) => setTaskName(e.target.value)}></input>
      <textarea className="desc-input" value={desc}  onChange={(e) => setDescText(e.target.value)}></textarea>

      <button onClick={() => taskList[props.id].tasks_id ? dbUpdatedTask(desc, name) : dbCreateTask(projectsId, desc, name)}>SAVE</button>
    </div>
    )
  };


  return (
    <div>
      {(edit) ? renderEditTask() : renderTaskModal()}
    </div>
  );

};

export default TaskContainer






















