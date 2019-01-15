import React, { Component } from 'react'

import {
  Section, Title, Content,
  Keyword, LinksContainer, Link
} from './about.styles.js'
import Metadata from './about.metadata.js'

class About extends Component {
  constructor() {
    super();
  }
  renderKeyword(word) {
    return <Keyword>
      {word}
    </Keyword>;
  }
  renderLinks() {
    return Object.keys(Metadata.links).map((key, index) => {
      const link = Metadata.links[key];
      return this.renderLink(link, index);
    })
  }
  renderLink(link, index) {
    const { label, color, url } = link;
    const urlPrefix = url.includes('@') ? 'mailto:' : '';
    return <Link
          key={index}
          color={color}
          href={urlPrefix +url} target='_blank'>
      {label}
    </Link>;
  }
  render() {
    return <Section>
        <Title>about</Title>
        <Content>
          <div>
            {`Hi there, my name is `}
            {this.renderKeyword(Metadata.bio.name)}
            {'. I strive to deliver beautiful experiences over to web '}
            {`and am always up for new challenges. `}
            {`Feel free to reach out at `}
            {this.renderKeyword(Metadata.bio.email)}
          </div>
          <LinksContainer>
            {this.renderLinks()}
          </LinksContainer>
        </Content>
    </Section>
  }
}

export default About;
