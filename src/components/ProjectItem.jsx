import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";

class ProjectItem extends Component {
  state = {};

  deleteProject = () => {
    this.props.deleteProject(this.props.index);
  };

  render() {
    // console.log("Project Item", this.props);
    return (
      <div className="card  mb-3" style={{ maxWidth: "22rem" }}>
        <div className="card-header">
          <AddTask
            onTaskAdded={this.props.onTaskAdded}
            index={this.props.index}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          {this.props.tasks.map((task, taskIndex) => (
            <TaskItem
              taskName={task}
              key={taskIndex}
              taskIndex={taskIndex}
              projectIndex={this.props.index}
              deleteTask={this.props.deleteTask}
            />
          ))}
        </div>
        <div className="card-footer">
          <div
            className="btn btn-danger btn-small"
            onClick={this.deleteProject}
          >
            Delete project
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
