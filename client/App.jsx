import React, {useState, useEffect} from 'react';
import Homepage from './components/homepage.jsx'
import LoginPage from './components/loginpage.jsx';
import './styles.css'
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoginActionCreator } from './actions/actions.js';

const App = () => {
  const login = useSelector ((state) => state.projects.loginStatus)

    return (
        <div id="App">
            {
                (login) ? <Homepage /> : <LoginPage />
            } 
        </div>
    )
}


export default App;