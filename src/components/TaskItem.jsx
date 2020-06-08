import "./TaskItem.css";
import React, { Component } from "react";

class TaskItem extends Component {
  state = {};
  deleteTask = () => {
    this.props.deleteTask(this.props.taskIndex, this.props.projectIndex);
  };
  render() {
    return (
      <div className="task-item flex-row">
        <p className="card-text">{this.props.taskName}</p>
        <i className="fas fa-trash" onClick={this.deleteTask}></i>
      </div>
    );
  }
}

export default TaskItem;
