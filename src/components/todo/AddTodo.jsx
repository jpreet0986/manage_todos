import React, { Component } from "react";
import { saveTodo, getTodo } from "../../services/fakeTodoList";
import { toast } from "react-toastify";

class AddTodo extends Component {
  state = {
    data: {
      id: 0,
      description: "",
    },
    errors: {},
  };
  componentDidMount = async () => {
    if (this.props.match.params.id) {
      const todoId = this.props.match.params.id;
      const todo = await getTodo(todoId);
      this.setState({ data: { id: todo.id, description: todo.description } });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.data);
    if (this.state.data.description !== "") {
      await saveTodo(this.state.data);
      toast("Todo added successfully");
      this.props.history.push("/");
    } else {
      this.setState({ error: "Description is required" });
    }
  };
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data.description = input.value;
    if (input.value.length > 3) {
      this.setState({ error: "" });
    }
    this.setState({
      data,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                value={this.state.data["description"]}
                className="form-control"
                onChange={this.handleChange}
              />
              {this.state.error && (
                <div className="alert alert-danger alert-dismissible fade show">
                  {this.state.error}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <button className="btn btn-primary">Submit</button>
              <button
                className="ml-2 btn btn-primary"
                onClick={() => this.props.history.push("/")}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AddTodo;
