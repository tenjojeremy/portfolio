import React from 'react';
import Particles from '../components/particles';
import styled from 'styled-components'
import LinkedinIcon from '../images/linkedin.svg';
import GithubIcon from '../images/github.svg';
import ResumeIcon from '../images/ResumeIcon.svg';
import arrowDownIcon from '../images/arrowDown.svg';
import { goToAnchor } from 'react-scrollable-anchor'

class name extends React.Component {

  //initial state
  constructor(props) {
    super(props)
    this.state = {
      data: 'initial'
    }
  }

  //Methods
  ScrollDown = () => {
		goToAnchor('firstProject', false)
  }
  render() {
    //Properties

    //Template
    return (
      <ParticlesCon>
        <Particles/>
        <InfoContainer>
          <Title>Jeremy Tenjo</Title>
          <SubTitle>Project Showcase</SubTitle>
          <AboutMe>
            I am a web developer who enjoys the challenges of solving modern problems by using the latest and greatest web tools availabe at my disposal. I love Javascript, but I am always experimenting new technnologies that will make my development more efficient.
          </AboutMe>
          <Linktext>Check out my Linkedin, GitHub and Resume</Linktext>
          <LinksCon>
            <a title="Linkedin" target="_blank" rel="noopener noreferrer" href="https://ca.linkedin.com/in/jeremy-tenjo-244048120">
              <Icon src={LinkedinIcon} alt="linkedin icon"/>
            </a>

            <a title="Github" target="_blank" rel="noopener noreferrer" href="https://github.com/tenjojeremy">
              <Icon src={GithubIcon} alt="github icon"/>
            </a>
            <a title="Portfolio" target="_blank" rel="noopener noreferrer" href="https://firebasestorage.googleapis.com/v0/b/portfolio-83749.appspot.com/o/Resume.pdf?alt=media&token=2695b8d8-c8a4-4acc-812a-68bdf48b43b8">
              <Icon src={ResumeIcon} alt="CV icon"/>
            </a>
          </LinksCon>
					<ArrowDown src={arrowDownIcon} alt="Arrow Down" onClick={this.ScrollDown}/>
        </InfoContainer>

      </ParticlesCon>
    );
  }

}

//Style
const ArrowDown = styled.img `
display: block;
margin: 0 auto;
width: 40px;
cursor: pointer;

@media (min-width: 600px) {
	position: absolute;
	bottom: 0;
	left: 0 ;
	right: 0;
	margin: auto;
}
 `;
const AboutMe = styled.p `
text-align: center;
color: white;
font-size: 16px;
margin-top: 40px;
margin-bottom: 40px;
line-height: 21px;
letter-spacing: 2px;
@media (min-width: 600px) {
	font-size: 18px;
}
 `;
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
	${ ''/* background: red; */}
height: 70px;
width: 180px;
margin: 0 auto;
 `;
const ParticlesCon = styled.div `
height: 100vh;
background: #182327;
position: relative;

`;

const InfoContainer = styled.div `
height: 520px;
width: 100%;
position: absolute;
top: 0;
@media (min-width: 600px) {
	width: 390px;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}

`;
const Title = styled.p `
color: #049372;
font-family: "PT Serif", serif;
font-weight: bolder;
font-size: 50px;
line-height: 78px;
margin-top: 0;
margin-bottom: 10px;
text-align: center;
margin-top: 0;
@media (min-width: 600px) {
	 font-size: 66px;
}
@media (min-width: 950px) {
	 font-size: 66px;
}
`;
const SubTitle = styled.p `
text-align: center;
font-size: 20px;
line-height: 25px;
color: white;
font-weight: bold;
`;

export default name
