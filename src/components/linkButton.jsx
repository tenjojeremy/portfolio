import React from 'react';
import styled from 'styled-components'

export default class LinkButton extends React.Component {

	//initial state
	constructor(props) {
		super(props)
		this.state = {
			link: props.link,
			type: props.type
		}
	}

	//Methods

	render() {
		//Properties
		const Link = styled.a `
		border-radius: 28px;
    font-family: "PT Sans", sans-serif;
    color: #969696;
    letter-spacing: 4px;
    font-size: 15px;
    background: #fcfcfc;
    padding: 10px 20px 10px 20px;
    border: solid #ffffff 2px;
    text-decoration: none;
		position: absolute;
		bottom:0;
		`
		//Template
		return (
			<Link href={this.state.link} target="_blank">{this.state.type}</Link>
		);
	}

}
