import React from 'react';
import './App.css';
import Header from './components/header/Header';
import TodoTask from './components/todo-task/TodoTask';
import AddTodoInput from './components/add-todo-input/AddTodoInput';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputVal: '',
      currId: 0
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('handle submit');
    let task = {
      id: this.state.currId,
      task: this.state.inputVal,
      isCompleted: false
    };
    let tasks = this.state.tasks;
    tasks.push(task);
    this.setState({
      tasks: tasks,
      inputVal: '',
      currId: this.state.currId + 1
    });
  };

  handleInputChange = e => {
    const val = e.target.value;
    console.log('Handle Input Change: ', val, e);
    this.setState({
      inputVal: val
    });
  };

  handleCheckChange = idx => {
    console.log(idx);
    let tasks = this.state.tasks;
    tasks[idx] = Object.assign({}, tasks[idx], {
      isCompleted: !tasks[idx].isCompleted
    });
    this.setState({
      tasks: tasks
    });
  };

  handleDeleteClick = idx => {
    let tasks = this.state.tasks;
    tasks.splice(idx, 1);
    this.setState({
      tasks: tasks
    });
  };

  render() {
    return (
      <>
        <Header bgColor="#333" />
        <div className="content">
          <AddTodoInput
            handleInputChange={this.handleInputChange}
            value={this.state.inputVal}
            handleSubmit={this.handleSubmit}
          />
          {JSON.stringify(this.props.tasks)}
          {this.state.tasks.map(task => (
            <TodoTask
              key={task.id}
              task={task}
              handleCheckChange={this.handleCheckChange}
              handleDeleteClick={this.handleDeleteClick}
            />
          ))}
          {!this.state.tasks.length && (
            <div className="no-data">Start adding todo now.</div>
          )}
        </div>
      </>
    );
  }
}

export default App;
