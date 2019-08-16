import React from 'react'
import styled from 'styled-components'
import GithubIcon from '../images/github.svg'
import StorybookIcon from '../images/storybook.svg'

import mainIcon from './../images/FootyCityIcon.svg'

const ComingSoon = ({ name, logo, repo, site, backgroundIMG }) => {
  return (
    <Wrapper backgroundIMG={backgroundIMG}>
      <Content>
        <Header>
          <img src={logo} alt="app" />
          <p>{name}</p>
        </Header>
        <Title>A component and utility library</Title>

        <Links>
          <a title="Repo" target="_blank" rel="noopener noreferrer" href={repo}>
            <Icon src={GithubIcon} alt="github icon" />
          </a>

          <a
            title="Storybook"
            target="_blank"
            rel="noopener noreferrer"
            href={site}
          >
            <Icon2 src={StorybookIcon} alt="stirybook icon" />
          </a>
        </Links>
      </Content>
    </Wrapper>
  )
}

//Style
const Wrapper = styled.div`
  box-shadow: inset 0px 0px 250px rgba(0, 231, 120, 0.3);
  background: linear-gradient(
      108.05deg,
      rgba(0, 184, 212, 0.9) 0%,
      rgba(0, 191, 165, 0.9) 100%
    ),
    url(${({ backgroundIMG }) => backgroundIMG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  display: grid;
  align-items: center;
  grid-gap: 20px;

  @media (min-width: 600px) {
    height: 400px;
  }
`

const Icon = styled.img`
  width: 30px;

  @media (min-width: 600px) {
    width: 40px;
  }
`
const Icon2 = styled.img`
  width: 130px;
  @media (min-width: 600px) {
    width: 140px;
  }
`

const Links = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: fit-content(100%);
  width: 100%;
  justify-content: center;
  align-items: center;
  grid-gap: 15px;
`

const Content = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 20px;
  padding: 30px;

  @media (min-width: 600px) {
    padding: 0;
  }
`

const Header = styled.div`
  display: grid;
  margin: 0 auto;
  width: fit-content;
  grid-template-columns: auto 200px;
  grid-gap: 20px;
  position: relative;
  align-items: center;
  @media (min-width: 600px) {
    grid-template-columns: fit-content(100%) fit-content(100%);
  }

  img {
    width: 60px;
    @media (min-width: 400px) {
      width: 70px;
    }
    @media (min-width: 600px) {
      width: 115px;
    }
  }
  p {
    font-family: HammersmithOne;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 35px;
    letter-spacing: 0.13px;
    color: #ffffff;
    white-space: nowrap;
    text-shadow: 0px 0px 9px rgba(255, 255, 255, 0.65);
    margin: 0;
    @media (min-width: 600px) {
      font-size: 65px;
    }
  }
`

const Title = styled.p`
  font-family: HammersmithOne;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  color: #ffffff;
  text-align: center;
  margin: 0;
  width: 100%;
  font-size: 18px;
`
export default ComingSoon
