function addTodo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  });
}

function deleteTodo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1500);
  });
}

function toggleTodo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 800);
  });
}

const todoApi = {
  addTodo,
  deleteTodo,
  toggleTodo
};

export default todoApi;
