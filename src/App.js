import React, {Component} from 'react';
import './App.css';
//Projects
import Project from './components/project';
import styled from 'styled-components'
import Intro from './containers/intro';
import ProjectsData from './projectData.json';
import screenshot from './images/screenshot.png';
var Carousel = require('nuka-carousel');

class App extends Component {
	mixins: [Carousel.ControllerMixin]
	render() {
		const MasterContainer = styled.div `
    margin:0;
    padding:0;
    height: 100%;
    width: 100%;
  `;

		const projectList = ProjectsData.map((project) => <span key={project.name.toString()}>
			<Project name={project.name} description={project.description} color={project.color} position={project.position} link={project.link} type={project.type} images={project.images}/>
		</span>);

		return (
			<MasterContainer>
				<Intro/>
				<Carousel>
				        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
				        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
				        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
				        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
				        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
				        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
				      </Carousel>
				{projectList}
			</MasterContainer>
		);
	}
}

export default App;
