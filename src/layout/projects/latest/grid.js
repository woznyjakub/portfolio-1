import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Caption } from '../../../components'
import { theme } from '../../../css/theme'
import ImageWrapper from '../image-wrapper'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  ${({ theme }) => theme.media('desktop-large')} {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
    align-items: center;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    grid-gap: 2rem;
  }
`
const StyledItemWrapper = styled.div`
  padding-bottom: 0.5rem;

  ${({ theme }) => theme.media('desktop-large')} {
    :nth-child(1) {
      grid-column: 1 / span 3;
    }
    :nth-child(2) {
      grid-column: 4 / span 2;
    }
  }
`

const StyledItem = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  padding: 3rem 1rem;

  ${({ theme }) => theme.media('desktop-large')} {
    padding: ${({ largeSize }) => (largeSize ? '2rem 5rem' : '2rem 1.5rem')};
  }

  ${({ theme }) => theme.media('super-large')} {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`

const StyledCaption = styled(Caption)`
  margin: 0;
  padding: 0;
  text-align: right;
  line-height: 1.5em;
  padding: 0 1rem;
`
const Grid = () => (
  <StaticQuery
    query={graphql`
      query {
        portfolio: file(relativePath: { eq: "portfolio.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        clock: file(relativePath: { eq: "clock.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 65) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    // I tried to use map here, but the data structure is too complex for me now. :/
    render={data => (
      <StyledGrid>
        <StyledItemWrapper>
          <StyledItem largeSize bgColor={theme.colors.purple}>
            <ImageWrapper
              codeUrl="https://github.com/woznyjakub/binary-clock-app"
              demoUrl="https://woznyjakub.github.io/binary-clock-app/"
            >
              <Img fluid={data.clock.childImageSharp.fluid} />
            </ImageWrapper>
          </StyledItem>
          <StyledCaption>React, Styled Components</StyledCaption>
        </StyledItemWrapper>
        <StyledItemWrapper>
          <StyledCaption>This website</StyledCaption>
          <StyledItem bgColor={theme.colors.red}>
            <ImageWrapper codeUrl="https://github.com/woznyjakub/portfolio">
              <Img fluid={data.portfolio.childImageSharp.fluid} />
            </ImageWrapper>
          </StyledItem>
          <StyledCaption>
            GatsbyJS, React, Styled Components and a bit of GraphQL
          </StyledCaption>
        </StyledItemWrapper>
      </StyledGrid>
    )}
  />
)

export default Grid
