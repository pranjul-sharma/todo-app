import React from 'react';
import './AddTodoInput.css';

const PLACEHOLDER = 'Add new task here';

class AddTodoInput extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          value={this.props.value}
          onChange={this.props.handleInputChange}
          placeholder={PLACEHOLDER}
        />
      </form>
    );
  }
}

export default AddTodoInput;
