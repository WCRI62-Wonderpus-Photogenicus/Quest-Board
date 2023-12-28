/**
 * ************************************
 *
 * @module  projectsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  taskList: [],
  newTaskName: '',
  taskModalBoolean: false,
  modalId: null,
  desc: ''
};

const projectsReducer = (state = initialState, action) => {
  switch(action.type){
    case types.ADD_NEW_TASK:
      const newTaskName = state.newTaskName
      return {
        ...state,
        taskList: state.taskList.concat({
          name: newTaskName,
          desc: '',
        }),
        newTaskName: '', 
      }
    case types.ADD_NEW_TASK_NAME:
      return {
        ...state, 
        newTaskName: action.payload
      }    
    case types.TOGGLE_TASK_MODAL:
      return {
        ...state, 
        taskModalBoolean: action.payload.bool,
        modalId: action.payload.id
      }  
    case types.EDIT_TASK_DESC:
      // const task = state.taskList.slice(action.payload.id, action.payload.id+1)
      // console.log(task)

      // const taskList = state.tasklist.slice()
      // console.log(taskList)
      // for (let i = 0; i<taskList.length;i++){
      //   // if (i.)
      // }
      
      // // console.log('in reducer', task)
      // task[0].desc = action.payload.desc
      // console.log(task)
      // const wholeDangList = state.taskList.slice(0, state.taskList.length - 1)
      // const updatedList = wholeDangList.splice(action.payload.id, 1, task)
      const updatedTaskList = state.taskList.map((el, i) => (i === action.payload.id) ? Object.assign({}, el, {desc: action.payload.desc}) : el)
      console.log(state.taskList)
        


      // const updatedTaskList = state.taskList.splice(action.payload.id, 1, task)
      // console.log(updatedTaskList)
      
      return {
        ...state, 
        taskList: updatedTaskList
      }          
    default: 
      return state;
  }
}
  //   let marketList;
  //   let lastMarketId = state.lastMarketId;
  //   let totalMarkets = state.totalMarkets;
  //   let totalCards = state.totalCards;
  // switch (action.type) {
  //   case types.ADD_MARKET: {
  //     // increment lastMarketId and totalMarkets counters
  //     totalMarkets++;
  //     totalCards++;
  //     // create the new market object from provided data
  //     const newMarket = {
  //       // what goes in here?
  //       id: lastMarketId++,
  //       location: state.newLocation,
  //       cards: 1,
  //     };
  //     // push the new market onto a copy of the market list
  //     marketList = state.marketList.slice();
  //     marketList.push(newMarket);
  //     // return updated state
  //     return {
  //       ...state,
  //       marketList,
  //       lastMarketId,
  //       totalMarkets,
  //       totalCards,
  //       newLocation: '',
  //     };
  //   }
  //   default: {
  //     return state;
  //   }
  // }

export default projectsReducer;
