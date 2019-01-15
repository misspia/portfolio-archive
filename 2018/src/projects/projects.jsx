import React, { Component } from 'react'
import LazyLoad from 'react-lazy-load';

import { Container, Title, Content } from './projects.styles.js'
import { Metrics } from '../themes/themes.js'

import Project from './project.jsx'
import Metadata from './projects.metadata.js'

class Projects extends Component {
  constructor() {
      super();
  }
  renderProjects() {
    return Metadata.projects.map((project, index) => {
      return this.renderProject(project, index);
    })
  }
  renderProject(project, index) {
    const offset = this.calcLoadOffet();

    return <LazyLoad 
        key={index} 
        offsetVertical={offset}>
      <Project
          title={project.title}
          image={project.image}
          github={project.github}
          demo={project.demo}/>
    </LazyLoad>
  }
  calcLoadOffet() {
    return window.innerHeight * 0.8;
  }
  render() {
    return <Container>
      <Title>projects</Title>
      <Content>
        {this.renderProjects()}
      </Content>
    </Container>

  }
}

export default Projects;
