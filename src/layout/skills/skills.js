import React from 'react'
import styled from 'styled-components'

import { Container } from '../../components'
import { Heading } from '../../components'
import { Paragraph } from '../../components'

import BasicSkillsImages from './basic'
import FurtherSkillsImages from './further'
const StyledSection = styled.section`
  padding: 40vh 1.5rem 4rem 1rem;
  --slant: 3deg;
  transform: skewY(var(--slant));
  margin-top: -50px;
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
  box-shadow: 16px 16px 0 0 ${({ theme }) => theme.colors.semiTransparentGrey};
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
  > div {
    /* This could be done better when images are not provided by GraphQL.
     * Flex-basis or width is required here, otherwise the GraphQL query will render images 0x0 px. */
    flex-basis: ${({ childAmount }) =>
      childAmount % 2 === 0 && childAmount % 3 !== 0 ? '20%' : '26%'};
    max-width: 96px;
  }
  ${({ theme }) => theme.media('tablet')} {
    max-width: initial;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: ${({ childAmount }) =>
      childAmount % 2 === 0 && childAmount % 3 !== 0
        ? 'center'
        : 'space-between'};
    > div {
      flex-basis: ${({ childAmount }) =>
        childAmount % 2 === 0 && childAmount % 3 !== 0 ? '21%' : '13%'};
      ${({ childAmount }) =>
        childAmount % 2 === 0 && childAmount % 3 !== 0
          ? 'margin: 0 0.5rem;'
          : null};
    }
  }
  ${({ theme }) => theme.media('desktop-small')} {
    justify-content: center;
    > div {
      margin: 0 0.5rem;
    }
  }
  ${({ theme }) => theme.media('desktop-large')} {
    > div {
      margin: 0 1rem;
    }
  }
`
const Skills = () => (
  <StyledSection>
    <StyledContainer>
      <Heading>Technologies and utilities I use:</Heading>
      <StyledImagesWrapper childAmount="6" className="padding-responsive-top">
        <BasicSkillsImages />
      </StyledImagesWrapper>
      <Paragraph>
        Carriage quitting securing be appetite it declared. High eyes kept so
        busy feel call in. Would day nor ask walls known. But preserved
        advantage are but and certainty earnestly enjoyment. Passage weather as
        up am exposed. And natural related man subject. Eagerness get situation
        his was delighted.
      </Paragraph>
      <StyledImagesWrapper childAmount="4" className="padding-responsive-top">
        <FurtherSkillsImages />
      </StyledImagesWrapper>
      <Paragraph>
        Carriage quitting securing be appetite it declared. High eyes kept so
        busy feel call in. Would day nor ask walls known. But preserved
        advantage are but and certainty earnestly enjoyment. Passage weather as
        up am exposed. And natural related man subject. Eagerness get situation
        his was delighted.
      </Paragraph>
    </StyledContainer>
  </StyledSection>
)

export default Skills
