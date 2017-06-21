import React from 'react'
import styled from 'styled-components'
import LinkButton from './linkButton.jsx'

class FanshaweIntramurals extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			description: props.description,
			color: props.color,
			position: props.position,
			link: props.link,
			type: props.type,
			images: props.images
		};
	}
	render() {
		const ProjectContainer = styled.div `
		background: ${props => props.color};
		background-image: url('../images/${props => props.img}.png');
		background-attachment: fixed;
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
		margin:0;
		padding:0;
		height: 100vh;
		width: 100%;
`;

		const ProjectDescCon = styled.div `
	height: 100%;
	width: 50%;
	position:absolute;
	left: 50%;
	`;

		const ProjectDesc = styled.div `
height: 60%;
width: 400px;
top: 0;
bottom:0;
margin-top: auto;
margin-bottom: auto;
position:absolute;
left: 100px;
`;
		const Title = styled.p `
color: white;
font-family: "PT Sans", sans-serif;
    font-size: 60px;
    line-height: 87px;
		margin-bottom: 20px;
`;
		const Position = styled.p `
color: white;
margin-top: 3px;
font-size: 16px;
line-height: 19px;
font-family: "PT Sans", sans-serif;
height: 40px;
border-bottom: 1px solid white;
margin-bottom: 20px;
letter-spacing: 4px;
`;
		const Description = styled.p `
		color:white;
		font-size: 19px;
    line-height: 26px;
    font-family: "PT Serif", serif;
    height: 170px;
`;
		return (
			<ProjectContainer color={this.state.color} img={this.state.images}>
				<ProjectDescCon>
					<ProjectDesc>
						<Title>{this.state.name}</Title>
						<Position>{this.state.position}</Position>
						<Description>{this.state.description}</Description>
						<LinkButton link={this.state.link} type={this.state.type}/>
					</ProjectDesc>
				</ProjectDescCon>
			</ProjectContainer>
		);
	}
}

export default FanshaweIntramurals
