import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.todos.map(todo => (
            <li key={todo.id} className="list-group-item">
              {todo.id + " " + todo.text}{" "}
              <button onClick={() => this.deleted(todo.id)}>delete</button>
              <button onClick={() => this.edit(todo)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  deleted = id => this.props.delete(id);
  edit =todo => this.props.edit(todo);
}

export default TodoList;
