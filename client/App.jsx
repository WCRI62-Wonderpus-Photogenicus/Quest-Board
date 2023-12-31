import React, {useState, useEffect} from 'react';
import Homepage from './components/homepage.jsx'
import LoginPage from './components/loginpage.jsx';
import './styles.css'
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoginActionCreator } from './actions/actions.js';

const App = () => {
  const login = useSelector ((state) => state.projects.loginStatus)
  const dispatch = useDispatch()
    // const toggleTaskModal = useSelector((state) => {return state.projects.taskModalBoolean});
    
   useEffect(()=> {
    const checkSessionStatus = async () => {
        console.log("********IN CHECK SESSION STATUS********")
        try {
            const response = await fetch('/session', {credentials: "include"});
            const data = await response.json();

            console.log("THIS SHOULD HAVE RUN HERE IS THE DATA:", data)
            dispatch(toggleLoginActionCreator(data.loginStatus, data.projectsId, data.userId))
        } catch (err) {
            console.log('error during checkSessionStatus', error);
        }
    }
    checkSessionStatus(); // Call the function
   }, []);

    return (
        <div id="App">
            {
                (login) ? <Homepage /> : <LoginPage />
            } 
        </div>
    )
}


export default App;