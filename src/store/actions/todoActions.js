import * as aTypes from '../../shared/actionTypes';
let currId = 0;

export const addTodo = task => ({
  type: aTypes.ADD_TODO_LOADING,
  payload: {
    id: ++currId,
    task
  }
});

export const toggleTodo = id => ({
  type: aTypes.TOGGLE_TODO_LOADING,
  payload: { id }
});

export const deleteTodo = id => ({
  type: aTypes.DELETE_TODO_LOADING,
  payload: { id }
});
