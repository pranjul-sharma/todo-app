import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../../shared/actionTypes';

const initialState = {
  tasks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task } = action.payload;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: id,
            task: task,
            isCompleted: false
          }
        ]
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === id) task.isCompleted = !task.isCompleted;
          return task;
        })
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== id)
      };
    }
    default:
      return state;
  }
}
