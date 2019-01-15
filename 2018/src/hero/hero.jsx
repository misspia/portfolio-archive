import React, { Component } from 'react'
import { Section, Modal, Heading, Subheading } from './hero.styles.js'

import ParticleSystem from './particleSystem.js'

class Hero extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const PS = new ParticleSystem(this.canvas);
    PS.init();
    PS.setResizeHandler();
    PS.render();
  }
  renderModal() {
    return <Modal>
      <Heading>pia leung</Heading>
      <Subheading>art+code</Subheading>
    </Modal>
  }
  render() {
    return <Section>
        {this.renderModal()}
        <canvas ref={(ref) => this.canvas = ref}></canvas>
    </Section>
  }
}


export default Hero;
