import React from 'react';
import './TodoTask.css';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../store/actions/todoActions';

class TodoTask extends React.Component {
  handleCheckChange = () => {
    this.props.toggleTodo(this.props.task.id);
  };

  handleDeleteClick = () => {
    this.props.deleteTodo(this.props.task.id);
  };

  render() {
    return (
      <div className="container">
        <input
          type="checkbox"
          checked={this.props.task.isCompleted}
          onChange={this.handleCheckChange}
        />
        {this.props.task.isCompleted ? (
          <h5>
            <strike>{this.props.task.task}</strike>
          </h5>
        ) : (
          <h5>{this.props.task.task}</h5>
        )}
        <button onClick={this.handleDeleteClick}>Clear</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ tasks: state.todos.tasks });
export default connect(
  mapStateToProps,
  { deleteTodo, toggleTodo }
)(TodoTask);
