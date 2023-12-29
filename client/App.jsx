import React, {useState} from 'react';
import Homepage from './components/homepage.jsx'
import TaskListContainer from './components/TaskListContainer.jsx'
import TaskContainer from './components/taskContainer.js'
import LoginPage from './components/loginpage.jsx';
import './styles.css'
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const login = useSelector ((state) => state.projects.loginStatus)
    
    // const toggleTaskModal = useSelector((state) => {return state.projects.taskModalBoolean});
    
    return (
        <div id="App">
            {
                (login) ? <Homepage /> : <LoginPage />
            } 
        </div>
    )
}


export default App;