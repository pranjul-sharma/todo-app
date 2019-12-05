import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../api/todoApi';
import {
  ADD_TODO,
  ADD_TODO_FAILED,
  ADD_TODO_LOADING,
  TOGGLE_TODO,
  TOGGLE_TODO_FAILED,
  TOGGLE_TODO_LOADING,
  DELETE_TODO,
  DELETE_TODO_FAILED,
  DELETE_TODO_LOADING
} from '../shared/actionTypes';

function* addTodo(action) {
  try {
    const res = yield call(Api.addTodo, action.payload);
    yield put({ type: ADD_TODO, payload: action.payload });
  } catch (e) {
    yield put({ type: ADD_TODO_FAILED, message: e.message });
  }
}
function* toggleTodo(action) {
  try {
    const res = yield call(Api.toggleTodo, action.payload);
    yield put({ type: TOGGLE_TODO, payload: action.payload });
  } catch (e) {
    yield put({ type: TOGGLE_TODO_FAILED, message: e.message });
  }
}
function* deleteTodo(action) {
  try {
    const res = yield call(Api.deleteTodo, action.payload);
    yield put({ type: DELETE_TODO, payload: action.payload });
  } catch (e) {
    yield put({ type: DELETE_TODO_FAILED, message: e.message });
  }
}

function* todoSaga() {
  yield takeLatest(ADD_TODO_LOADING, addTodo);
  yield takeLatest(TOGGLE_TODO_LOADING, toggleTodo);
  yield takeLatest(DELETE_TODO_LOADING, deleteTodo);
}

export default todoSaga;
