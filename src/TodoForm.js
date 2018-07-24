import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <div>
        <form className="form-group" onSubmit={this.submitTodo}>
          <input
            className="form-control"
            type="text"
            onChange={this.changeText}
            value={this.props.inputText}
          />
        </form>
      </div>
    );
  }
  changeText = e => this.props.changeTodoText(e.target.value);
  submitTodo = e => {
    e.preventDefault();
    this.props.submit();
  };
}

export default TodoForm;
