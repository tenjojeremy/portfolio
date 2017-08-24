import React, {Component} from 'react';
import './App.css';
//Projects
import Project from './components/project';
import styled from 'styled-components'
import Intro from './containers/intro';
import ProjectsData from './projectData.json';
import screenshot from './images/screenshot.png';
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
background: rgba(0, 0, 0, 0.5);
${'' /* background: white; */}
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
	    color: '#fff',

	};
	const conStyle = {

	    position: 'absolute',
	    top: 0,
	    bottom: 0,
	    left: 0,
	    right: 0,
	    margin: 'auto',
			height: 600

	};
	 const SliceImg = styled.img `
	 height: 90%;
    width: 90%;
		margin: 0 auto;
		display: block;
		max-width: 800px;
	 `;
		const projectList = ProjectsData.map((project) => <span key={project.name.toString()}>
			<Project name={project.name} description={project.description} color={project.color} position={project.position} link={project.link} type={project.type} images={project.images}/>
		</span>);

		return (
			<MasterContainer>
				<Intro/>

				<CarouselCon>
					<SwipeableViews style={conStyle}>
					<div style={styles}>
					<SliceImg src={screenshot} />
					</div>
					<div style={styles}>
					slide n°2
					</div>
					<div style={styles}>
					slide n°3
					</div>
					</SwipeableViews>
				</CarouselCon>
				{projectList}
			</MasterContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
