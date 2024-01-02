
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = configureStore({reducer: reducers, devTools: process.env.NODE_ENV !== 'production'});

export default store;
