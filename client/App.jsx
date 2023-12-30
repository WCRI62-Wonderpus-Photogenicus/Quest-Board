import React from 'react';
import Homepage from './components/homepage.jsx';
import TaskListContainer from './components/TaskListContainer.jsx';
import TaskContainer from './components/taskContainer.js';
import LoginTest from './components/logintest.jsx';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  // const toggleTaskModal = useSelector((state) => {return state.projects.taskModalBoolean});

  return (
    <div id='App'>
      <Homepage />
      <LoginTest />
    </div>
  );
};

export default App;
