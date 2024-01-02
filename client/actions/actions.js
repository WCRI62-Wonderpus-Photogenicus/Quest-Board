
import * as types from '../constants/actionTypes';

export const toggleLoginActionCreator = (bool, projectsId = null, userId = null) => ({
  type: types.TOGGLE_LOGIN,
  payload: {bool: bool, projectsId: projectsId, userId: userId}
})

export const addNewTaskActionCreator = () => ({
  type: types.ADD_NEW_TASK,
});

export const toggleTaskModalActionCreator = (bool, id) => ({
  type: types.TOGGLE_TASK_MODAL,
  payload: {bool: bool, id: id}
});

export const updateTaskListActionCreator = (array) => ({
  type: types.UPDATE_TASK_LIST,
  payload: array
});

