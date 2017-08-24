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
background: white;
height: 100%;
width: 100%;
position: fixed;
z-index: 99;
top: 0;
left: 0;
	`;
	const styles = {
	  slide: {
	    padding: 15,
	    minHeight: 100,
	    color: '#fff',
	  },
	  slide1: {
	    background: '#FEA900',
	  },
	  slide2: {
	    background: '#B3DC4A',
	  },
	  slide3: {
	    background: '#6AC0FF',
	  },
	};
		const projectList = ProjectsData.map((project) => <span key={project.name.toString()}>
			<Project name={project.name} description={project.description} color={project.color} position={project.position} link={project.link} type={project.type} images={project.images}/>
		</span>);

		return (
			<MasterContainer>
				<Intro/>
				<SwipeableViews>
	 <div style={Object.assign({}, styles.slide, styles.slide1)}>
		 slide n°1
	 </div>
	 <div style={Object.assign({}, styles.slide, styles.slide2)}>
		 slide n°2
	 </div>
	 <div style={Object.assign({}, styles.slide, styles.slide3)}>
		 slide n°3
	 </div>
 </SwipeableViews>
				{/* <CarouselCon>

				</CarouselCon> */}
				{projectList}
			</MasterContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
