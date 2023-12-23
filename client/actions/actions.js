/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';

// this is a template action to reference when we atart making our own.
// export const addCardActionCreator = marketId => ({
//   type: types.ADD_CARD,
//   payload: marketId,
// });

export const addTaskInfoActionCreator = (taskId) => ({
  type: types.ADD_TASK_INFO,
  payload: taskId,
});

export const deleteTaskActionCreator = (taskId) => ({
  type: types.DELETE_TASK,
  payload: taskId,
});
