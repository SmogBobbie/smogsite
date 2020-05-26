import React, { Component, Fragment } from "react";
import client from "../client";
import Project from "../components/Project";
import "./Work.scss";

let projects;

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: projects || [],
      currentProject: 0,
    };

    this.prevProject = this.prevProject.bind(this);
    this.nextProject = this.nextProject.bind(this);
  }

  componentDidMount() {
    if (projects !== undefined) return;
    client
      .getEntries({
        content_type: "project",
      })
      .then((entries) => {
        entries.items.sort((a, b) => a.fields.order - b.fields.order);
        this.setState({
          projects: entries.items,
        });

        projects = entries.items;
      });
  }

  prevProject() {
    let currentProject = this.state.currentProject;
    let newProject = Math.max(currentProject - 1, 0);

    this.setState({
      currentProject: newProject,
    });
  }

  nextProject() {
    let currentProject = this.state.currentProject;
    let newProject = Math.min(
      currentProject + 1,
      this.state.projects.length - 1
    );

    this.setState({
      currentProject: newProject,
    });
  }

  render() {
    let { projects, currentProject } = this.state;

    let desktop = (
      <Fragment>
        {currentProject > 0 ? (
          <div className="Work__Button Work__Prev" onClick={this.prevProject}>
            Previous
          </div>
        ) : null}

        {projects.length > 1 ? (
          <Project project={projects[currentProject]} />
        ) : null}
        {currentProject < projects.length - 1 ? (
          <div className="Work__Button Work__Next" onClick={this.nextProject}>
            Next
          </div>
        ) : null}
      </Fragment>
    );

    let mobile = (
      <Fragment>
        {projects.map((proj, i) => {
          return <Project project={proj} key={i} />;
        })}
      </Fragment>
    );

    return (
      <section className="Work">
        {window.innerWidth > 765 ? desktop : mobile}
      </section>
    );
  }
}

export default Work;
