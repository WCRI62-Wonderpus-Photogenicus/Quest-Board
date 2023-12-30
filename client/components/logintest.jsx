import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { verifyUserActionCreator } from '../actions/actions';

const LoginTest = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const loginStatus = useSelector((state) => state.projects.isVerified);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user,
          password: pass,
        }),
      });
      const data = await response.json();
      dispatch(verifyUserActionCreator(data));
    } catch {}
  };

  const handleSignup = async () => {
    dispatch(verifyUserActionCreator(false));
  };

  if (loginStatus === true) {
    return <div>VERIFIED!</div>;
  } else if (!loginStatus) {
    return <div>FAILED, SIGNUP INSTEAD</div>;
  } else if (loginStatus === 'login') {
    return (
      <div className='login-test'>
        <input
          placeholder='username'
          onChange={(e) => {
            setUser(e.target.value);
            //   console.log('this is the current user:', user);
          }}
          value={user}
        ></input>
        <input
          placeholder='password'
          onChange={(e) => {
            setPass(e.target.value);
            //   console.log('this is the current pass:', pass);
          }}
          value={pass}
        ></input>
        <button onClick={handleSubmit}>LOGIN</button>
        <button onClick={handleSignup}>SIGNUP</button>
      </div>
    );
  }
};

export default LoginTest;
