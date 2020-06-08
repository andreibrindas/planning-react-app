import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class ProjectList extends Component {
  state = {};
  render() {
    // console.log("project list", this.props.projects);
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        }}
      >
        {this.props.projects.map((project, index) => (
          <ProjectItem
            key={index}
            index={index}
            name={project.name}
            tasks={project.tasks}
            onTaskAdded={this.props.onTaskAdded}
            deleteProject={this.props.deleteProject}
            deleteTask={this.props.deleteTask}
          />
        ))}
      </div>
    );
  }
}

export default ProjectList;
