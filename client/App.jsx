import React, {useState, useEffect} from 'react';
import Homepage from './components/homepage.jsx'
import LoginPage from './components/loginpage.jsx';
import './styles.css'
import { useSelector, useDispatch } from 'react-redux';
import background from '../client/assets/questboard_blur.png'
import background2 from '../client/assets/questboard_homepage.png'

const App = () => {
  const login = useSelector ((state) => state.projects.loginStatus)

  useEffect(()=>{
    if (login) {
        document.body.style.backgroundImage = `url(${background2})`
        document.body.style.transform = 'scale(1)'
        document.body.style.transition = '0.3s all ease-in'
    } else {
        document.body.style.backgroundImage = `url(${background})`
        document.body.style.transform = 'scale(0.7)'
        document.body.style.transition = '0.3s all ease-out'
   }
  }, [login])

    return (
        <div id="App" >
            {
                (login) ? <Homepage /> : <LoginPage />
            } 
        </div>
    )
}


export default App;