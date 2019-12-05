import * as aTypes from '../../shared/actionTypes';
import Api from '../../api/todoApi';
let currId = 0;

export const addTodo = task => dispatch => {
  dispatch({ type: aTypes.ADD_TODO_LOADING });
  Api.addTodo()
    .then(res =>
      dispatch({
        type: aTypes.ADD_TODO,
        payload: {
          id: ++currId,
          task
        }
      })
    )
    .catch(e => dispatch({ type: aTypes.ADD_TODO_FAILED, message: e.message }));
};

export const toggleTodo = id => dispatch => {
  dispatch({ type: aTypes.TOGGLE_TODO_LOADING });
  Api.toggleTodo()
    .then(res => dispatch({ type: aTypes.TOGGLE_TODO, payload: { id } }))
    .catch(e =>
      dispatch({ type: aTypes.TOGGLE_TODO_FAILED, message: e.message })
    );
};

export const deleteTodo = id => dispatch => {
  dispatch({ type: aTypes.DELETE_TODO_LOADING });
  Api.deleteTodo()
    .then(res => dispatch({ type: aTypes.DELETE_TODO, payload: { id } }))
    .catch(e =>
      dispatch({ type: aTypes.DELETE_TODO_FAILED, message: e.message })
    );
};
