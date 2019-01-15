import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component';

import {
  Container,
  Brand, Heading, Subheading,
  Tabs
} from './nav.styles.js'

import Metadata from './nav.metadata.js'

class Nav extends Component {
  renderBrand() {
    const brand = Metadata.brand
    return <Brand onClick={() => this.clickHandler(brand.key)}>
      <Heading>{brand.heading}</Heading>
      <Subheading>{brand.subheading}</Subheading>
    </Brand>
  }
  renderTabs() {
    const tabs = Metadata.tabs.map((tab, index) => {
      return this.renderTab(tab, index);
    })
    return <Tabs>
      {tabs}
    </Tabs>
  }
  renderTab(tab, index) {
    return <div
          key={index}
          onClick={() => this.clickHandler(tab.key)}>
      {tab.label}
    </div>
  }
  clickHandler(key) {
    const config = {
      align: 'top',
      offset: 0,
      duration: 500,
      ease:'inOutSine'
    };
    scrollToComponent(this.props[key], config);
  }
  render() {
    return <Container>
      {this.renderBrand()}
      {this.renderTabs()}
    </Container>
  }
}


export default Nav;
