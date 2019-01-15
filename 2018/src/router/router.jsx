import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Container } from './router.styles.js'
import Routes from './routes.js'

import Nav from '../nav/nav.jsx'

import Hero from '../hero/hero.jsx'
import About from '../about/about.jsx'
import Projects from '../projects/projects.jsx'

import styled from 'styled-components'


export default () => {
	return <HashRouter>
		<Container>
			<Nav/>
			<Switch>
				<Route exact path={Routes.home} component={Hero}/>
				<Route path={Routes.about} component={About}/>
				<Route path={Routes.projects} component={Projects}/>
			</Switch>
		</Container>
	</HashRouter>
};

// const firstChild = props => {
//   const childrenArray = React.Children.toArray(props.children);
//   return childrenArray[0] || null;
// }
// export default () => {
// 	return <HashRouter>
// 		<Container>
// 			<Nav/>
// 			<Switch>
// 				<Route
// 					exact path={Routes.hero}
// 					children={({ match, ...rest }) => (
// 						<TransitionGroup component={firstChild}>
// 							{match && <Hero {...rest} />}
// 						</TransitionGroup>
// 					)}/>
// 				<Route
// 					path={Routes.about}
// 					children={({ match, ...rest }) => (
// 						<TransitionGroup component={firstChild}>
// 							{match && <About {...rest} />}
// 						</TransitionGroup>
// 					)}/>
// 					<Route
// 						path={Routes.projects}
// 						children={({ match, ...rest }) => (
// 							<TransitionGroup component={firstChild}>
// 								{match && <Projects {...rest} />}
// 							</TransitionGroup>
// 						)}/>
// 			</Switch>
// 		</Container>
// 	</HashRouter>
// };
