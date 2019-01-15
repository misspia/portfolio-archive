import React, { Component } from 'react'
import { projectAnimateIn, projectHover } from './animations.js'

import {
  ProjectContainer,
  BGImage,
  HiddenInfo, Subtitle, LinksRow,
  DemoButton, SourceCodeButton
} from './projects.styles.js'

class Project extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
      title: '',
      github: '',
      demo: '',
      image: '',
  }
  componentDidMount() {
    projectAnimateIn(this.container)
  }
  renderBGImage() {
    return <BGImage
          src={this.props.image}
          alt={`${this.props.title} project banner`}/>;
  }
  renderHiddenInfo() {
    return <HiddenInfo>
        <Subtitle>{this.props.title}</Subtitle>
        {this.renderLinks()}
    </HiddenInfo>
  }
  renderLinks() {
    return <LinksRow>
      {this.renderDemoLink()}
      {this.renderGithubLink()}
    </LinksRow>
  }
  renderDemoLink() {
    return <DemoButton
          target='_blank'
          href={this.props.demo}>
          Demo
    </DemoButton>
  }
  renderGithubLink() {
    return <SourceCodeButton
          target='_blank'
          href={this.props.github}>
      source code
    </SourceCodeButton>
  }
  render() {
    return <ProjectContainer
        innerRef={(ref) => this.container = ref}>
        {this.renderBGImage()}
        {this.renderHiddenInfo()}
      </ProjectContainer>
  }
}

export default Project;
