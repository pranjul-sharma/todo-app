import React from 'react';
import './AddTodoInput.css';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/todoActions';

const PLACEHOLDER = 'Add new task here';

class AddTodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({ value: '' });
  };

  handleInputChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.value}
          onChange={this.handleInputChange}
          placeholder={PLACEHOLDER}
        />
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodoInput);
