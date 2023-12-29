import React from "react";
import { useState } from "react";
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

  const handleLogin = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      };
      const response = await fetch("/login", requestOptions);
      const data = await response.json();
      console.log(data);
      dispatch(toggleLoginActionCreator(true, data.projectsId, data.userId));
    } catch (error) {
      console.log("error accessing database");
    }
  };
  
  const handleRegister = async () => {
    try {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password, projectsId})
        };
        console.log(requestOptions)
        const response = await fetch("/register", requestOptions)
        const data = await response.json()
        console.log(data);
        dispatch(toggleLoginActionCreator(true, data.projectsId, data.userId));
    } catch (error) {
        console.log("error accessing database");
    }
  }

  const renderLoginForm = () => {
    return (
      <div className="login">
        <input onChange={setUsername} placeholder="username"></input>
        <input
          onChange={setPassword}
          type="password"
          placeholder="password"
        ></input>
        <button onClick={() => handleLogin()}>Sign In</button>
        <p>If you don't have an account</p>
        <button onClick={() => setSignUp(true)}>Sign Up</button>
      </div>
    );
  };

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
