import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//import logo from "./logo.svg";
import { ToastContainer } from "react-toastify";
import Todo from "./components/todo/Todo";
import AddTodo from "./components/todo/AddTodo";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />
      <main className="container mt-3">
        <Switch>
          <Route path="/todo" component={Todo}></Route>
          <Route path="/addTodo/:id" component={AddTodo}></Route>
          <Route path="/addTodo" component={AddTodo}></Route>
          <Redirect to="/todo"></Redirect>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
