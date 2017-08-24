import React, {Component} from 'react';
import './App.css';
//Projects
import Project from './components/project';
import styled from 'styled-components'
import Intro from './containers/intro';
import ProjectsData from './projectData.json';
import screenshot from './images/screenshot.png';
import arrowLeft from './images/arrowLeft.svg';
import arrowRight from './images/arrowRight.svg';
import close from './images/close.svg';
import SwipeableViews from 'react-swipeable-views';

//State
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Toggle_Carousel} from './state/actions/index';

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		Toggle_Carousel
	}, dispatch)
}
function mapStateToProps(state) {
	return {toggleCarousel: state.ToogleCarousel}
}
class App extends Component {

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
			: 'block'};
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
 `;
		const CloseIconCon = styled.div `
position: relative;
height: 30px;
  `;
		const LeftArrow = styled.img `
width: 20px;
position: absolute;
left: 33px;
 `;
		const RightArrow = styled.img `
width: 20px;
position: absolute;
right: 23px;
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
			<Project name={project.name} description={project.description} color={project.color} position={project.position} link={project.link} type={project.type} images={project.images}/>
		</span>);

		return (
			<MasterContainer>
				<Intro/>

				<CarouselCon>

					<CarouselInner>

						<CloseIconCon>
							<CloseIcon src={close}/>
						</CloseIconCon>

						<SwipeableViews index={1} enableMouseEvents={true}>

							<div style={styles}>
								<SliceImg src={screenshot}/>
							</div>
							<div style={styles}>
								<SliceImg src={screenshot}/>

							</div>
							<div style={styles}>
								<SliceImg src={screenshot}/>

							</div>
						</SwipeableViews>

						<DirCon>
							<LeftArrow src={arrowLeft}/>
							<RightArrow src={arrowRight}/>

						</DirCon>
					</CarouselInner>
				</CarouselCon>
				{projectList}
			</MasterContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
