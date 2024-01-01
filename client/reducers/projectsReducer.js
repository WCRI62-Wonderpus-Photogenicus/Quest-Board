import * as types from '../constants/actionTypes';

const initialState = {
  loginStatus: true,
  projectsId: null,
  userId: null,
  taskList: [],
  taskModalBoolean: false,
  taskEditBoolean: false,
  modalId: null,
};

const projectsReducer = (state = initialState, action) => {
  switch(action.type){

    //login functionality
    case types.TOGGLE_LOGIN:
      
    return {
      ...state, 
      loginStatus: action.payload.bool,       //checks login status if true or false (true = renders homepage, false = renders login page). This is done in App.jsx
      userId: action.payload.userId,          //checks for userId
      projectsId: action.payload.projectsId,  //renders the projects associated with userId 
      taskModalBoolean: false                 //makes sure a task modal is never open on login or logout
    }  
    
    //adds a *mostly* empty object to the end of our TaskList Array in order to edit it and save a new task to our database
    case types.ADD_NEW_TASK:
      return {
        ...state,
        taskList: state.taskList.concat({     //adds an empty object to tasklist array
          name: '',
          desc: '',
        }),
        taskModalBoolean: true,               //opens the task modal
        taskEditBoolean: true,                //toggles task modal to edit mode whenever task is created
        modalId: state.taskList.length        //passes index of newly created empty task for editing
      }

    //if taskModalBoolean is true, task modal is visible using task id, if false taskModal is not visible
    case types.TOGGLE_TASK_MODAL:
      return {
        ...state, 
        taskModalBoolean: action.payload.bool, //open or close the Task Modal depending on bool passed in action.payload (true = open, false = closed)
        modalId: action.payload.id,            //makes sure the index of the task that is clicked on is correct
        taskEditBoolean: false,                //makes sure that an existing task's modal never opens in edit mode
      }  

    //Anytime we update Redux array from database we use this reducer
    case types.UPDATE_TASK_LIST: 
      return {
        ...state, 
        taskList: action.payload,              //updates task list array
      } 

    default: 
    return state;
  }
};

export default projectsReducer;
