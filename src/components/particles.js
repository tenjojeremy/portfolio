import React from 'react';
import Particles from 'react-particles-js';
// import styled from 'styled-components'

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
		// const ParticlesCon = styled.div `
		// height: 100vh;
 // `;

		//Template
		return (
			<span>
				<Particles height={'100vh'} params={{
					"particles": {
						"number": {
							"value": 80,
							"density": {
								"enable": true,
								"value_area": 900
							}
						},
						"color": {
							"value": "#049372"
						},
						"shape": {
							"type": "circle",
							"stroke": {
								"width": 0,
								"color": "#000000"
							},
							"polygon": {
								"nb_sides": 5
							},
							"image": {
								"src": "img/github.svg",
								"width": 100,
								"height": 100
							}
						},
						"opacity": {
							"value": 0.5,
							"random": false,
							"anim": {
								"enable": false,
								"speed": 1,
								"opacity_min": 0.1,
								"sync": false
							}
						},
						"size": {
							"value": 3,
							"random": true,
							"anim": {
								"enable": false,
								"speed": 40,
								"size_min": 0.1,
								"sync": false
							}
						},
						"line_linked": {
							"enable": true,
							"distance": 142.0465754938091,
							"color": "#ffffff",
							"opacity": 0.1815039575754227,
							"width": 1.4204657549380908
						},
						"move": {
							"enable": true,
							"speed": 1.1,
							"direction": "none",
							"random": false,
							"straight": false,
							"out_mode": "out",
							"bounce": false,
							"attract": {
								"enable": false,
								"rotateX": 600,
								"rotateY": 1200
							}
						}
					},
					"interactivity": {
						"detect_on": "canvas",
						"events": {
							"onhover": {
								"enable": false,
								"mode": "grab"
							},
							"onclick": {
								"enable": false,
								"mode": "push"
							},
							"resize": true
						},
						"modes": {
							"grab": {
								"distance": 143.85614385614386,
								"line_linked": {
									"opacity": 1
								}
							},
							"bubble": {
								"distance": 400,
								"size": 40,
								"duration": 2,
								"opacity": 8,
								"speed": 3
							},
							"repulse": {
								"distance": 200,
								"duration": 0.4
							},
							"push": {
								"particles_nb": 4
							},
							"remove": {
								"particles_nb": 2
							}
						}
					},
					"retina_detect": true
				}}/>

		</span>
		);
	}

}