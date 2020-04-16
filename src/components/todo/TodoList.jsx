import React from "react";
import { NavLink } from "react-router-dom";

const TodoList = (props) => {
  const todos = props.todos;
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>
                <NavLink to={`/addTodo/${todo.id}`}>Edit</NavLink>
                <button
                  onClick={() => props.onDelete(todo)}
                  className="ml-4 btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TodoList;
