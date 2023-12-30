import React from 'react';
import { useDispatch } from "react-redux";
import { toggleLoginActionCreator } from "../actions/actions.js";

const Navbar = () => {
const dispatch = useDispatch()

  return (
    <div id='title'>
            <div className="nav-bar">
              <div>
                <button onClick={() => dispatch(toggleLoginActionCreator(false))}>Sign Out</button>
              </div> 
            </div>
    </div>
  )
}

export default Navbar;