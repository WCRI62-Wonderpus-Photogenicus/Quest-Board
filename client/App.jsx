import React, {useState, useEffect} from 'react';
import Homepage from './components/homepage.jsx'
import TaskListContainer from './components/TaskListContainer.jsx'
import TaskContainer from './components/taskContainer.js'
import LoginPage from './components/loginpage.jsx';
import './styles-test.css'
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const login = useSelector ((state) => state.projects.loginStatus)

  const [currRender, setCurrRender] = useState('login')

  useEffect(()=> {
    if (login) {
        setCurrRender('animate') 
      setTimeout(() => setCurrRender('homepage'), 2000)
    }
    else {
        setCurrRender('login')
    }
  }, [login])
    
    return (
    <div className="app-container">
      <div className="app">
            {
                (currRender === 'homepage') ? <Homepage/> : (currRender === 'animate') ? <></> : <LoginPage />
            } 
      </div>
      <div className={`background ${login ? 'zoomed' : ''}`}></div>
     </div>
    )
}


export default App;
