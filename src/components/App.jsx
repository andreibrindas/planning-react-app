import React, { Component } from "react";
import AddProject from "./AddProject";
import ProjectList from "./ProjectList";

class App extends Component {
  state = {
    projects: [
      {
        name: "test 1",
        tasks: ["clean", "delete", "go"]
      }
    ]
  };

  onTermSubmit = term => {
    const projects = [...this.state.projects];
    const newProjectName = { name: term, tasks: [] };
    projects.push(newProjectName);
    this.setState({ projects });
  };

  onTaskAdded = (task, index) => {
    // console.log(task);
    const projects = [...this.state.projects];
    const updatedProject = projects[index];
    updatedProject.tasks.push(task);
    this.setState({ updatedProject });
  };

  deleteProject = index => {
    const projects = [...this.state.projects];
    projects.splice(index, 1);
    this.setState({ projects });
  };

  deleteTask = (taskIndex, projectIndex) => {
    // cons
    // console.log(taskIndex);
    const projects = [...this.state.projects];
    let project = projects[projectIndex];
    project.tasks.splice(taskIndex, 1);
    projects[projectIndex] = project;
    // console.log(project);
    this.setState({ projects });
  };

  render() {
    return (
      <div className="container">
        <AddProject onFormSubmit={this.onTermSubmit} />
        <ProjectList
          projects={this.state.projects}
          onTaskAdded={this.onTaskAdded}
          deleteProject={this.deleteProject}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
