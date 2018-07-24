import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Wish from "./Wish";
class App extends Component {
  state = {
    inputText: "",
    currentlyUpdatingId:0,
    todos: [
      {
        id: 1,
        text: "create simple react app"
      },
      {
        id: 2,
        text: "To create rest api"
      },
      {
        id: 3,
        text: "To create react redux app"
      }
    ]
  };

  changeTodoText = text =>
    this.setState({
      inputText: text
    });
  submit = () =>{
    let todos;
    if(this.state.currentlyUpdatingId==0){
      todos=this.state.todos.concat({
          id: this.state.todos.length + 1,
          text: this.state.inputText
        })
    }else{
      todos= this.state.todos.map(
        todo => {
          if(todo.id==this.state.currentlyUpdatingId){
              todo.text=this.state.inputText;
          }
          return todo;
        }
      );
    }

    this.setState({
      inputText: "",
      todos: todos
    });
    
  }
  delete = id =>
    this.setState({
      todos: this.state.todos.filter(todo => todo.id != id)
    });
  edit = todo => this.setState({
    inputText:todo.text,
    currentlyUpdatingId:todo.id
  })

  render() {
    return (
      <div className="container">
        <TodoForm
          inputText={this.state.inputText}
          changeTodoText={this.changeTodoText}
          submit={this.submit}
        />
        <TodoList
          todos={this.state.todos}
          delete={this.delete}
          edit={this.edit}
        />
      </div>
    );
  }
}

export default App;
