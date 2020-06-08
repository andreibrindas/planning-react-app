import React, { Component } from "react";

class AddProject extends Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.term) {
      this.props.onFormSubmit(this.state.term);
    }
    this.setState({ term: "" });
  };

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label>Add Project</label>
            <input
              type="text"
              className="form-control m-2"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button type="submit" className="btn btn-primary btn-sm m-2">
              Add Project
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
