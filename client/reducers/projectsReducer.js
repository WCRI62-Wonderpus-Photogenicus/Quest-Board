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
  //   totalMarkets: 0,
  //   totalCards: 0,
  //   marketList: [],
  //   lastMarketId: 10000,
  //   newLocation: '',
  taskList: [
  ],
  newTaskName: '',
  taskModalBoolean: false,
};

const projectsReducer = (state = initialState, action) => {
  switch(action.type){
    case types.ADD_NEW_TASK:
      const newTaskName = state.newTaskName
      console.log('in reducer')
      return {
        ...state,
        taskList: state.taskList.concat({
          name: newTaskName,
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
        taskModalBoolean: action.payload
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
