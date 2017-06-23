import React from 'react';
import Particles from '../components/particles.jsx';
import styled from 'styled-components'

export default class name extends React.Component {

	//initial state
	constructor(props) {
		super(props)
		this.state = {
			data: 'initial'
		}
	}

	//Methods

	render() {
		//Properties

		//Style
		const ParticlesCon = styled.div `
		height: 100vh;
		background: #182327;
 `;

		const InfoContainer = styled.div `
width: 300px;
height: 300px;
background: red;
	 `;
		//Template
		return (
			<ParticlesCon>
				<Particles/>

			</ParticlesCon>
		);
	}

}
