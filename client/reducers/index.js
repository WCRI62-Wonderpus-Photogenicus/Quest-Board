import { combineReducers } from 'redux';

// import all reducers here
import projectsReducer from './projectsReducer.js'

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  projects: projectsReducer

});

// make the combined reducers available for import
export default reducers;
