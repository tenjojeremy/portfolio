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
width: 390px;
height: 300px;
// background: red;
position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
		@media (max-width: 390px) {
			width: 100%;
		}
	 `;
		const Title = styled.p `
		color: #049372;
    font-family: "PT Serif", serif;
    font-weight: bolder;
    font-size: 66px;
    line-height: 78px;
    margin-top: 0;
    margin-bottom: 10px;
		text-align: center;
	  `;
		const SubTitle = styled.p `
		text-align: center;
    font-size: 21px;
    line-height: 25px;
		color: white;
	  `;
		//Template
		return (
			<ParticlesCon>
				<Particles/>
				<InfoContainer>
					<Title>Jeremy Tenjo</Title>
					<SubTitle>Project Showcase</SubTitle>
				</InfoContainer>
			</ParticlesCon>
		);
	}

}
