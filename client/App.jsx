import React, {useState, useEffect} from 'react';
import Homepage from './components/homepage.jsx'
import LoginPage from './components/loginpage.jsx';
import './styles-test.css'
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  
  // Redux state variable boolean that switches on successful login / logout and conditionally renders homepage or login.
  const login = useSelector ((state) => state.projects.loginStatus)

  const [currRender, setCurrRender] = useState('login')

  //useEffect listens to changes in the Redux state variable loginStatus
  useEffect(()=> {
    //if loginStatus is true we will change state to 'animate' first then 'homepage' using setTimeout
    if (login) {
        setCurrRender('animate') 
      setTimeout(() => setCurrRender('homepage'), 2000)
    }
    //else loginStatus is false we will change state to 'login'
    else {
        setCurrRender('login')
    }
  }, [login])
    
    return (
    <div className="app-container">
      <div className="app">
            {/* conditional rendering based on currRender*/}
            {/* when a user logs in, it transitions from <LoginPage/> to <> to <HomePage/> where <> will just show the still background image*/}
            {
                (currRender === 'homepage') ? <Homepage/> : (currRender === 'animate') ? <></> : <LoginPage />
            } 
        </div>
        <div className={`background ${login ? 'zoomed' : ''}`}></div>
     </div>
    )
}

export default App;
