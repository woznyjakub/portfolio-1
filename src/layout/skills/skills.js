import React from 'react'
import styled from 'styled-components'

import { Container, Heading, Paragraph } from '../../components'

import BasicSkillsImages from './basic'
import FurtherSkillsImages from './further'
const StyledSection = styled.section`
  padding: 40vh 1.25rem 4rem 0.5rem;
  --slant: 3deg;
  transform: skewY(var(--slant));
  margin: -50px 0 50px;
  background-color: ${({ theme }) => theme.colors.green};
  overflow: hidden;
  ${({ theme }) => theme.media('tablet')} {
    padding-top: 30vh;
    padding-bottom: 6rem;
  }
  ${({ theme }) => theme.media('desktop-small')} {
    padding-top: 20vh;
  }
  ${({ theme }) => theme.media('super-large')} {
    padding-bottom: 8rem;
  }
`

const StyledContainer = styled(Container)`
  transform: skewY(calc(var(--slant) * -1));
  background-color: ${({ theme }) => theme.colors.lightgrey};
  box-shadow: 16px 16px 0 0 ${({ theme }) => theme.colors.semiTransparentBlack};
  padding-left: 0;
  padding-right: 0;
  ${({ theme }) => theme.media('desktop-large')} {
    width: 80%;
  }
`

const StyledImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: ${({ childAmount }) =>
    childAmount % 2 === 0 && childAmount % 3 !== 0 ? '450px' : '350px'};
  margin: 0 auto;
  ${({ theme }) => theme.media('tablet')} {
    max-width: initial;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: ${({ childAmount }) =>
      childAmount % 2 === 0 && childAmount % 3 !== 0
        ? 'center'
        : 'space-between'};
    ${({ theme }) => theme.media('desktop-small')} {
      justify-content: center;
    }
  }
`
const Skills = () => (
  <StyledSection className="scroll-destination">
    <StyledContainer>
      <Heading>Technologies and utilities I work with</Heading>
      <StyledImagesWrapper childAmount="6" className="padding-responsive-top">
        <BasicSkillsImages />
      </StyledImagesWrapper>
      <Paragraph>
        I'm a beginning front-end developer. I was using HTML, vanilla JS, SASS
        and BEM methodology in my older projects. I think I know the basics of
        JavaScript as well as it's required to start the adventure with
        frameworks. Presently I'm learning React and I use CSS-in-JS library
        Styled Components. I know that first job is a start of constant learning
        and I'm open to get to know about new technologies.
      </Paragraph>
      <StyledImagesWrapper childAmount="4" className="padding-responsive-top">
        <FurtherSkillsImages />
      </StyledImagesWrapper>
      <Paragraph>
        I love to use React-based GatsbyJS environment in more static projects.
        I'm able to optimize and simply process graphics. I usually use
        photopea.com, but I can do the same in Adobe Photoshop. I was working
        with Git and Webpack, but my knowledge in this matter is rather basic. I
        really like to work with Linux and it's terminal, I've got more
        experience with debian-based distributions.
      </Paragraph>
    </StyledContainer>
  </StyledSection>
)

export default Skills
