import React from 'react';
import Particles from '../components/particles';
import styled from 'styled-components'
import LinkedinIcon from '../images/linkedin.svg';
import GithubIcon from '../images/github.svg';

class name extends React.Component {

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

		//Template
		return (
			<ParticlesCon>
				<Particles/>
				<InfoContainer>
					<Title>Jeremy Tenjo</Title>
					<SubTitle>Project Showcase</SubTitle>
					<Linktext>Check out my Gihut and Linkedin Pages</Linktext>

					<LinksCon>
						<a target="_blank" rel="noopener noreferrer" href="https://ca.linkedin.com/in/jeremy-tenjo-244048120">
							<Icon src={LinkedinIcon} alt="linkedin icon"/>
						</a>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/tenjojeremy">
							<Icon src={GithubIcon} alt="github icon"/>
						</a>
					</LinksCon>
				</InfoContainer>
			</ParticlesCon>
		);
	}

}

//Style
 const Linktext = styled.p `
color: #BDBDBD;
text-align: center;
font-size: 12px;

 `;
const Icon = styled.img `
width: 40px;
padding: 10px;
 `;
const LinksCon = styled.div `
	${'' /* background: red; */}
height: 70px;
width: 120px;
margin: 0 auto;
 `;
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

export default name
