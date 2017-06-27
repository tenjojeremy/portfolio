import React, {Component} from 'react';
import './App.css';
//Projects
import Project from './components/project';
import styled from 'styled-components'
import Intro from './containers/intro';
import ProjectsData from './projectData.json';

class App extends Component {
	render() {
		const MasterContainer = styled.div `
    margin:0;
    padding:0;
    height: 100%;
    width: 100%;
  `;
		const projects = ProjectsData;

		const projectList = projects.map((project) => <span key={project.name.toString()}>
			<Project name={project.name} description={project.description} color={project.color} position={project.position} link={project.link} type={project.type} images={project.images}/>
		</span>);

		return (
			<MasterContainer>
				<Intro/> {projectList}
			</MasterContainer>
		);
	}
}

export default App;
