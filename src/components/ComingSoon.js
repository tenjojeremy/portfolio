//Vendors
import React from 'react'
import styled from 'styled-components'

//Components

//Images
import backgroundIMG from './../images/background.jpg'
import mainIcon from './../images/FootyCityIcon.svg'

class ComingSoon extends React.Component {

  //initial state
  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
  }

  //Methods
  render() {
    //Properties

    //Template
    return (<Wrapper>
      <Content>
        <Header>
          <img src={mainIcon} alt="app"/>
          <p>Footy City</p>
        </Header>
        <ComingSoonTitle>COMING SOON</ComingSoonTitle>
      </Content>
    </Wrapper>);
  }

}

//Style
const Wrapper = styled.div `
box-shadow: inset 0px 0px 250px rgba(0, 231, 120, 0.3);
background: linear-gradient(0deg,rgba(33,33,33,0.30),rgba(33,33,33,0.30)),url(${backgroundIMG});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 200px;

@media (min-width: 600px) {
  height: 400px;
 }
`;

const Content = styled.div `
    padding-top: 15px;
        @media (min-width: 600px) {
          padding-top: 95px;

     }
`;
const Header = styled.div `
  display: grid;
  margin: 0 auto;
  width: 279px;
  grid-template-columns: auto 200px;
grid-gap: 20px;
position: relative;
img {
  width: 60px;
  height: 100%;
  @media (min-width: 400px) {
    width: 70px;

   }
}
 p {
   font-family: HammersmithOne;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 35px;
letter-spacing: 0.13px;
color: #FFFFFF;
text-shadow: 0px 0px 9px rgba(255, 255, 255, 0.65);
 }
`;

const ComingSoonTitle = styled.p `
 font-family: HammersmithOne;
 font-style: normal;
 font-weight: normal;
 line-height: normal;
 letter-spacing: 0.13px;
 color: #FFFFFF;
 text-align: center;
 margin: 0;
 width: 100%;
 font-size: 30px;
 @media (min-width: 400px) {
   font-size: 40px;
  }
 @media (min-width: 600px) {
   font-size: 60px;
  }
 @media (min-width: 1000px) {
   font-size: 90px;
  }
`;
export default ComingSoon
