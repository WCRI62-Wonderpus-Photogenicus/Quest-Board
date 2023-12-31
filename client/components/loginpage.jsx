import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleLoginActionCreator } from "../actions/actions.js";

//custom react hook that handles onChange events
const useInput = ({ start }) => {
  const [value, setValue] = useState(start);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};

const LoginPage = () => {
  const [signUp, setSignUp] = useState(false);
  const [username, setUsername] = useInput("");
  const [password, setPassword] = useInput("");
  const [projectsId, setProjectId] = useInput("")
  const dispatch = useDispatch();

  // path is passed in as arg (either "/login" or "/register") when it is called by onClick, 
  // Also we now pass projectsID on body for both login and register despite only needing it for register
  // We can do this because, even though the login middleware doesn't use it, the login middleware doesn't care that its there either.
  // all and all still plenty readable imo...
  
  const handleAuth = async (path) => {
    try{
      const requestOptions = {
        method: "POST",
        headers:  { "Content-Type": "application/json"},
        body: JSON.stringify({ username, password, projectsId }),
      };
      const response = await fetch(path, requestOptions)
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.message || 'Error from server');
      
      if (path === '/login') {
        dispatch(toggleLoginActionCreator(true, data.projectsId, data.userId));
      }
  
    } catch (error) {
      console.log("error accessing database");
    }
  }


  useEffect(()=> {
    const checkSession = async () => {
        try {
            const sessionResponse = await fetch('/login', {credentials: "include"});// {credentials: "include"} is needed to receive and store session cookie id in browser
            const sessionData = await sessionResponse.json();
            //res.locals is being served which contains the data the session's user property (check userController.checkSession in api.js)
            dispatch(toggleLoginActionCreator(sessionData.loginStatus, sessionData.projectsId, sessionData.userId))
        } catch (err) {
            console.log('error during checkSessionStatus', err);
        }
    }
    checkSession();
   }, []);


  const renderLoginForm = () => {
    return (
      <div className="login">
        <input onChange={setUsername} placeholder="username"></input>
        <input
          onChange={setPassword}
          type="password"
          placeholder="password"
        ></input>
        <button onClick={() => handleAuth("/login")}>Sign In</button>
        <p>If you don't have an account</p>
        <button onClick={() => setSignUp(true)}>Sign Up</button>
      </div>
    );
  };


  const handleRegister = () =>{
    //passing in /register route to handleAuth , creating and saving acc to database
    handleAuth("/register")
    //switches back to login form. need to log in to create session
    setSignUp(false)
  }
  
  const renderSignUpForm = () => {
    if (signUp) {
      return (
        <div className="signup">
          <input onChange={setUsername} placeholder="username"></input>
          <input
            onChange={setPassword}
            type="password"
            placeholder="password"
          ></input>
          <input onChange={setProjectId} placeholder="project ID (optional)"></input>
          <button onClick={() => handleRegister()}>Create Account</button>
          <p>If already have an account</p>
          <button onClick={() => setSignUp(false)}>Login</button>
        </div>
      );
    }
  };

  return (
    <div className="login">
      {signUp ? renderSignUpForm() : renderLoginForm()}
    </div>
  );
};

export default LoginPage;
