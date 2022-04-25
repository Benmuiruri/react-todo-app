import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: '',
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Add Todo...'
          name='title'
          value={this.state.title}
          onChange={this.inputHandler}
        />
        <button>Submit</button>
      </form>
    );
  }
}
export default InputTodo;
