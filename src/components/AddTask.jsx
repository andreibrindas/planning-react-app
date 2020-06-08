import React, { Component } from "react";

class AddTask extends Component {
  state = { task: "" };

  onInputChange = event => {
    this.setState({ task: event.target.value });
  };

  onTaskAdded = event => {
    event.preventDefault();

    if (this.state.task) {
      this.props.onTaskAdded(this.state.task, this.props.index);
    }

    this.setState({ task: "" });
  };

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.onTaskAdded}>
          <input
            type="text"
            name=""
            id=""
            className="form-control m-2"
            value={this.state.task}
            onChange={this.onInputChange}
          />
          <button className="btn btn-sm btn-info m-2">Add Task</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
