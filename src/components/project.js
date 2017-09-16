import React from 'react'
import styled from 'styled-components'
import LinkButton from '../components/linkButton'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Toggle_Carousel, Set_Gallery, Set_Current_Index, Set_Gallery_Count} from '../state/actions/index';

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		Toggle_Carousel,
		Set_Gallery,
		Set_Current_Index,
		Set_Gallery_Count
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
			imagesFolder: props.imagesFolder,
			imagesGallery: props.imagesGallery,
			techList: props.techList
		};
	}

	showCarousel = (imagesFolder, i) => {
		this.props.Set_Gallery(imagesFolder)
		this.props.Set_Gallery_Count(this.state.imagesGallery)
		this.props.Set_Current_Index(i)
		this.props.Toggle_Carousel(true)
	}

	render() {
		let listGallery = [],
			source,
			index,
			listTechCount = this.state.techList;

		for (var i = 1; i <= this.state.imagesGallery; i++) {
			source = `/images/${this.state.imagesFolder}/${i}.png`;

			listGallery.push(<GalleryItem key={i} data-index={i} src={source} onClick={(e) => {
				index = e.target.dataset.index - 1;
				this.showCarousel(this.state.imagesFolder, index)
			}}/>);
		}

		let listTech = listTechCount.map((item, i) => {
			let source2 = `/images/icons/${item}.svg`;
			if (item === 'express') {
				return <Express key={i}>Express.js</Express>
			}
			if (item === 'mongodb') {
				return <Express key={i}>mongoDB</Express>
			}
			return <li key={i} title={item}><IconTech src={source2}/></li>
		})

		return (
			<ProjectContainer color={this.state.color} img={this.state.imagesBG} imagesFolder={this.state.imagesFolder}>
				<ProjectDescCon>
					<ProjectDesc>
						<Title>{this.state.name}</Title>
						<Position>{this.state.position}</Position>
						<Description>{this.state.description}</Description>
						<TechyTitle>Tech used:</TechyTitle>
						<TechList>
							{listTech}
						</TechList>
						<GalleryCon>
							{listGallery}
						</GalleryCon>
						<Span display={this.state.type}>
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
cursor: pointer;
 `;
const GalleryCon = styled.div `
height: auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-row-gap: 10px;
overflow: scroll;
overflow-x: scroll;
margin-top: 20px;
margin-bottom: 20px;
@media (min-width: 950px) {
	height: 200px;
}
 `;
const Express = styled.li `
font-weight: lighter;
padding: 0;
margin: 0;
width: 60px;
position: relative;
bottom: 2px;
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
height: auto;
li {
display: inline;
margin-right: 10px;
}
@media (max-width: 950px) {
margin: 0 auto;
background: rgba(0, 0, 0, 0.5);
border-radius: 4px;
padding: 5px;
width: auto;
white-space: nowrap;
display: inline-block;
text-align: center;
padding: 10px;
margin-left: 0;
margin-right: 0;

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
@media (max-width: 950px) {
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
@media (max-width: 950px) {
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
@media (max-width: 950px) {
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

@media (max-width: 950px) {
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
@media (max-width: 950px) {
text-align: center;
}
`;
const Description = styled.p `
color:white;
font-size: 19px;
line-height: 26px;
font-family: "PT Serif", serif;
height: auto;
@media (max-width: 950px) {
 font-size: 16px;
}
`;

const Span = styled.div `
	display: ${props => props.display !== ""
	? 'block'
	: 'none'};
margin-top: 60px;
height:41px;
margin: 0 auto;
${ ''/* width: 105px; */}
@media (max-width: 950px) {
margin-top: 40px;

}
`;
export default connect(null, mapDispatchToProps)(Projects);
