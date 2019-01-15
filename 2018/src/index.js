import ReactDOM from 'react-dom'
import React, { Component } from 'react'

import styled from 'styled-components'
import { Fonts } from './themes/themes.js'

import Nav from './nav/nav.jsx'
import Hero from './hero/hero.jsx'
import About from './about/about.jsx'
import Projects from './projects/projects.jsx'

const Container = styled.main`
  margin: 0;
  padding: 0;
  font-family: ${Fonts.family};
  font-size: ${Fonts.sizeRegular};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InspectorMsg = `
  (¬‿¬) I see you have taken interest in my site.
  Send me a message at miss.pialeung@gmail.com and
  I'd be more than happy to chat about it
`;
class App extends Component {
  constructor() {
    super();
    this.state = { mounted: false }
  }
  componentDidMount() {
    console.log(InspectorMsg);
    this.setState({ mounted: true })
  }
	render() {
		return <Container>
      <Nav hero={this.hero} about={this.about} projects={this.projects}/>
      <Hero ref={ (ref) => this.hero = ref}/>
      <About ref={ (ref) => this.about = ref}/>
      <Projects ref={ (ref) => this.projects = ref}/>
    </Container>
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
