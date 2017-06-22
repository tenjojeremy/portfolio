import React, {Component} from 'react';
import './App.css';
//Projects
import Project from './components/project.jsx';
import styled from 'styled-components'
import Intro from './containers/intro.jsx';

class App extends Component {
	render() {
		const MasterContainer = styled.div `
    margin:0;
    padding:0;
    height: 100%;
    width: 100%;
  `;
		const projects = [
			{
				name: 'Fanshawe Intramurals',
				color: "red",
				images: 'fanshawe_intramurals',
				description: "Web app where students can join intramural teams and connect with their team-mates. Moreover, a CMS system for Fanshawe's intramural tournament management and client usability as well.",
				position: "Fullstack Developer",
				link: "https://github.com/tenjojeremy/Fanshawe_Intramurals",
				type: 'GITHUB LINK'
			}, {
				name: 'Complaints Check',
				color: "blue",
				images: 'complaints_check',
				description: "A web app where property manager can track tenants complaints and keep records of them It integrates a CMS to manage complaints and a client-side interface where tenants can log in and place complaints with photo evidence and detailed descriptions.",
				position: "Fullstack Developer",
				link: "https://github.com/tenjojeremy/Property_Management_App",
				type: 'GITHUB LINK'
			}
		];

		const projectList = projects.map((project) => <span key={project.name.toString()}>
			<Project name={project.name} description={project.description} color={project.color} position={project.position} link={project.link} type={project.type} images={project.images}/>
		</span>);

		return (
			<MasterContainer>
				<Intro />
				{projectList}
			</MasterContainer>
		);
	}
}

export default App;
