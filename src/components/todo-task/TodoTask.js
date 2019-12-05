import React from 'react';
import './TodoTask.css';

class TodoTask extends React.Component {
  render() {
    return (
      <div className="container">
        <input
          type="checkbox"
          checked={this.props.task.isCompleted}
          onChange={() => this.props.handleCheckChange(this.props.task.id)}
        />
        {this.props.task.isCompleted ? (
          <h5>
            <strike>{this.props.task.task}</strike>
          </h5>
        ) : (
          <h5>{this.props.task.task}</h5>
        )}
        <button onClick={this.props.handleDeleteClick}>Clear</button>
      </div>
    );
  }
}

export default TodoTask;
