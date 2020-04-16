import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { getTodoList, deleteTodo } from "./../../services/fakeTodoList";
import TodoList from "./TodoList";
import { toast } from "react-toastify";
class Todo extends Component {
  state = {
    todos: [],
  };

  componentDidMount = async () => {
    const todos = await getTodoList();
    this.setState({ todos });
  };
  handleDelete = (todo) => {
    const todos = deleteTodo(todo);
    this.setState({ todos });
    toast("Deleted successfully");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1>Todos</h1>
            <NavLink to="/addTodo" className="btn btn-primary">
              Add Todo
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-sm ">
            <br />
            {this.state.todos && (
              <TodoList todos={this.state.todos} onDelete={this.handleDelete} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
