/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = configureStore({reducer: reducers, devTools: process.env.NODE_ENV !== 'production'});

export default store;
