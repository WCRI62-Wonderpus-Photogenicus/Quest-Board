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

// export const addTaskInfoActionCreator = (taskId) => ({
//   type: types.ADD_TASK_INFO,
//   payload: taskId,
// });

// export const deleteTaskActionCreator = (taskId) => ({
//   type: types.DELETE_TASK,
//   payload: taskId,
// });

export const addNewTaskActionCreator = () => ({
  type: types.ADD_NEW_TASK,
});

export const addNewTaskNameActionCreator = (newTaskName) => ({
  type: types.ADD_NEW_TASK_NAME,
  payload: newTaskName
});

export const toggleTaskModalActionCreator = (bool, id) => ({
  type: types.TOGGLE_TASK_MODAL,
  payload: {bool: bool, id: id}
});

export const editTaskDescActionCreator = (id, desc) => ({
  type: types.EDIT_TASK_DESC,
  payload: {id: id, desc: desc}
});