import React from 'react'
import styled from 'styled-components'
import LinkButton from '../components/linkButton'
import reactIcon from '../images/react.svg';
import vueIcon from '../images/vue.svg';
import sqlIcon from '../images/MySQL.svg';
import laravelIcon from '../images/laravel.svg';
import codeignitorIcon from '../images/codeigniter.svg';
import screenshot from '../images/screenshot.png';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Toggle_Carousel, Set_Gallery} from '../state/actions/index';

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		Toggle_Carousel,
		Set_Gallery
	}, dispatch)
}
class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			description: props.description,
			color: props.color,
			position: props.position,
			link: props.link,
			type: props.type,
			imagesBG: props.imagesBG,
			imagesFolder: props.imagesFolder
		};
	}

	showCarousel = (name) => {
		this.props.Set_Gallery(name)
		this.props.Toggle_Carousel(true)
	}
	render() {

		return (
			<ProjectContainer color={this.state.color} img={this.state.imagesBG} imagesFolder={this.state.imagesFolder}>
				<ProjectDescCon>
					<ProjectDesc>
						<Title>{this.state.name}</Title>
						<Position>{this.state.position}</Position>
						<Description>{this.state.description}</Description>
						<TechyTitle>Tech used:</TechyTitle>
						<TechList>
							<li title="React"><IconTech src={reactIcon}/></li>
							<li title="Vuejs"><IconTech src={vueIcon}/></li>
							<Express>Express.js</Express>
							<li title="Laravel"><IconTech src={laravelIcon}/></li>
							<li title="Codeignitor"><IconTech src={codeignitorIcon}/></li>
						</TechList>

						<GalleryCon>

							<GalleryItem src={screenshot} onClick={() => {
								this.showCarousel(this.state.name)
							}}/>
							<GalleryItem src={screenshot} onClick={() => {
								this.showCarousel(this.state.name)
							}}/>
							<GalleryItem src={screenshot} onClick={() => {
								this.showCarousel(this.state.name)
							}}/>
							<GalleryItem src={screenshot} onClick={() => {
								this.showCarousel(this.state.name)
							}}/>
							<GalleryItem src={screenshot} onClick={() => {
								this.showCarousel(this.state.name)
							}}/>
							<GalleryItem src={screenshot} onClick={() => {
								this.showCarousel(this.state.name)
							}}/>
							<GalleryItem src={screenshot} onClick={() => {
								this.showCarousel(this.state.name)
							}}/>

						</GalleryCon>
						<Span>
							<LinkButton link={this.state.link} type={this.state.type}/>
						</Span>
					</ProjectDesc>
				</ProjectDescCon>
			</ProjectContainer>
		);
	}
}
const GalleryItem = styled.img `
width: 100px;
display: block;
margin: 0 auto;

 `;
const GalleryCon = styled.div `
height: 100px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-row-gap: 10px;
overflow: scroll;
overflow-x: scroll;
margin-top: 20px;
margin-bottom: 20px;
@media (min-width: 600px) {
	height: 200px;


}
 `;
const Express = styled.li `
font-weight: lighter;
padding: 0;
margin: 0;
width: 60px;
position: relative;
bottom: 3px;
 `;
const IconTech = styled.img `
width: 20px
 `;
const TechyTitle = styled.p `
color: white;
font-size: 14px;
font-weight: bold;
margin-bottom: 5px;
 `;
const TechList = styled.ul `
text-decoration: none;
list-style: none;
color: white;
padding: 0;
margin-top: 0;
li {
display: inline;
margin-right: 20px;
}
@media (max-width: 600px) {
margin: 0 auto;
background: rgba(0, 0, 0, 0.5);
border-radius: 4px;
padding: 5px;
width: auto;
white-space: nowrap;
display: inline-block;
text-align: center;
}
  `;
const ProjectContainer = styled.div `
background: ${props => props.color};
background-image: url('../images/${props => props.imagesFolder}/${props => props.img}.png');
background-attachment: fixed;
background-position: top center;
background-repeat: no-repeat;
background-size: cover;
margin:0;
padding:0;
height: 100vh;
width: 100%;
@media (max-width: 600px) {
	background-image: none;
	height: auto;
}
`;

const ProjectDescCon = styled.div `
	${ ''/* background: red; */}
height: 100%;
width: 50%;
position:absolute;
left: 50%;
@media (max-width: 951px) {
left: 0;
right: 0;
margin-right: auto;
margin-left: auto;
width: 80%;

}
@media (max-width: 600px) {
position: static;
height: auto;
width: 95%;
}
`;

const ProjectDesc = styled.div `
	${ ''/* background: blue; */}
${ ''/* height: 60%; */}
max-height: 900px;
width: auto;
max-width: 400px;
top: 0;
bottom:0;
margin-top: auto;
margin-bottom: auto;
position:absolute;
left: 100px;
@media (max-width: 951px) {
left: 0;
right: 0;
background:rgba(0, 0, 0, 0.70);
border-radius: 2px;
height:90%;
padding-top: 30px;
padding-bottom: 30px;
top: 0;
bottom: 0;
margin: auto;

}
@media (max-width: 600px) {
background: none;
${ ''/* height: 760px; */}
position: static;

}
`;
const Title = styled.p `
color: white;
font-family: "PT Sans", sans-serif;
font-size: 40px;
line-height: 60px;
margin-bottom: 10px;
margin-top: 10px;

@media (max-width: 600px) {
	line-height: 47px;
	font-size: 40px;
	margin-top: 0px;
text-align: center;
}
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
@media (max-width: 600px) {
text-align: center;
}
`;
const Description = styled.p `
color:white;
font-size: 19px;
line-height: 26px;
font-family: "PT Serif", serif;
height: auto;
@media (max-width: 600px) {
 font-size: 16px;
}
`;

const Span = styled.div `
margin-top: 60px;
height:41px;
margin: 0 auto;
display: block;
width: 155px;
@media (max-width: 600px) {
margin-top: 40px;

}
`;
export default connect(null, mapDispatchToProps)(Projects);
