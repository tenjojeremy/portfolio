import React, {Component} from 'react';
import './App.css';
//Projects
import Project from './components/project';
import styled from 'styled-components'
import Intro from './containers/intro';
import ProjectsData from './projectData.json';
import screenshot from './images/screenshot.png';
import screenshot2 from './images/ddd.png';
import arrowLeft from './images/arrowLeft.svg';
import arrowRight from './images/arrowRight.svg';
import close from './images/close.svg';
import SwipeableViews from 'react-swipeable-views';

//State
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Toggle_Carousel, Set_Current_Index} from './state/actions/index';

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		Toggle_Carousel,
		Set_Current_Index
	}, dispatch)
}
function mapStateToProps(state) {
	return {toggleCarousel: state.ToogleCarousel, galleryCount: state.GalleryCount, currentIndex: state.CurrentIndex, imagesFolder: state.imagesFolder, gallerySelected: state.GallerySelected}
}
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: this.props.currentIndex
		};
	}
	closeCar = () => {
		this.props.Toggle_Carousel(false)
	}
	prev = () => {
		if (this.props.currentIndex !== 0) {
			let n = this.props.currentIndex - 1;
			this.props.Set_Current_Index(n)
		} else {
			this.props.Set_Current_Index(this.props.galleryCount)

		}
	}
	next = () => {
		if (this.props.currentIndex < this.props.galleryCount) {
			let n = this.props.currentIndex + 1;
			this.props.Set_Current_Index(n)

		} else {
			this.props.Set_Current_Index(0)
		}
	}
	mixins : [Carousel.ControllerMixin]
	render() {
		const MasterContainer = styled.div `
    margin:0;
    padding:0;
    height: 100%;
    width: 100%;
  `;
		const CarouselCon = styled.div `
		display: ${this.props.toggleCarousel
			? 'block'
			: 'none'};
background: rgba(0, 0, 0, 0.8);
${ ''/* background: white; */}
height: 100%;
width: 100%;
position: fixed;
z-index: 99;
top: 0;
left: 0;

	`;

		const styles = {

			padding: 15,
			minHeight: 100,
			// maxWidth: 900,
			color: '#fff'
		};

		const SliceImg = styled.img `
	 height: 90%;
    width: 95%;
		margin: 0 auto;
		display: block;
		max-width: 800px;
	 `;
		const CloseIcon = styled.img `
width: 20px;
position: absolute;
right: 33px;
cursor: pointer;
 `;
		const CloseIconCon = styled.div `
position: relative;
height: 30px;
  `;
		const LeftArrow = styled.img `
width: 20px;
position: absolute;
left: 33px;
cursor: pointer;
 `;
		const RightArrow = styled.img `
width: 20px;
position: absolute;
right: 23px;
cursor: pointer;
 `;
		const DirCon = styled.div `
position: relative;
height: 23px;
  `;
		const CarouselInner = styled.div `
	 position: absolute;
	 top: 0;
	 bottom: 0;
	 left: 0;
	 right: 0;
	 margin: auto;
	 max-width: 800px;
	 max-height: 550px;
	 @media (max-width: 600px) {
top: 50px;
	 }
	 `;
		const projectList = ProjectsData.map((project) => <span key={project.name.toString()}>
			<Project name={project.name} description={project.description} color={project.color} position={project.position} link={project.link} type={project.type} imagesBG={project.imagesBG} imagesFolder={project.imagesFolder} imagesGallery={project.imagesGallery} techList={project.techList}/>
		</span>);

		let list = [],
			source,
			index;

		for (var i = 1; i <= this.props.galleryCount; i++) {
			source = `/images/${this.props.gallerySelected}/${i}.jpg`;

			list.push(
				<div key={i} style={styles}>
					<SliceImg src={source}/>
				</div>
			);
		}

		return (
			<MasterContainer>
				<Intro/>

				<CarouselCon>

					<CarouselInner>

						<CloseIconCon>
							<CloseIcon src={close} onClick={this.closeCar}/>
						</CloseIconCon>

						<SwipeableViews index={this.props.currentIndex}>
							{list}
						</SwipeableViews>

						<DirCon>
							<LeftArrow src={arrowLeft} onClick={this.prev}/>
							<RightArrow src={arrowRight} onClick={this.next}/>

						</DirCon>
					</CarouselInner>
				</CarouselCon>
				{projectList}
			</MasterContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
