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
    :nth-child(3) {
      grid-column: 1 / span 2;
    }
    :nth-child(4) {
      grid-column: 3 / span 3;
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
        challenge37: file(relativePath: { eq: "challenge37.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        challenge22: file(relativePath: { eq: "challenge22.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        waxom: file(relativePath: { eq: "waxom.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        challenge35: file(relativePath: { eq: "challenge35.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 85) {
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
          <StyledItem largeSize bgColor={theme.colors.navyblue}>
            <ImageWrapper
              codeUrl="https://github.com/woznyjakub/challenge37-gatsbyjs-version"
              demoUrl="https://woznyjakub.github.io/challenge37-gatsbyjs-version/"
            >
              <Img fluid={data.challenge37.childImageSharp.fluid} />
            </ImageWrapper>
          </StyledItem>
          <StyledCaption>GatsbyJS, React, Styled Components</StyledCaption>
        </StyledItemWrapper>
        <StyledItemWrapper>
          <StyledItem bgColor={theme.colors.green}>
            <ImageWrapper
              codeUrl="https://github.com/woznyjakub/challenge22"
              demoUrl="https://woznyjakub.github.io/challenge22/"
            >
              <Img fluid={data.challenge22.childImageSharp.fluid} />
            </ImageWrapper>
          </StyledItem>
          <StyledCaption>HTML, Sass, vanilla JS</StyledCaption>
        </StyledItemWrapper>
        <StyledItemWrapper>
          <StyledItem bgColor={theme.colors.red}>
            <ImageWrapper
              codeUrl="https://github.com/woznyjakub/waxom"
              demoUrl="https://woznyjakub.github.io/waxom/"
            >
              <Img fluid={data.waxom.childImageSharp.fluid} />
            </ImageWrapper>
          </StyledItem>
          <StyledCaption>HTML, Sass, vanilla JS, Webpack</StyledCaption>
        </StyledItemWrapper>
        <StyledItemWrapper>
          <StyledItem largeSize bgColor={theme.colors.blue}>
            <ImageWrapper
              codeUrl="https://github.com/woznyjakub/challenge35"
              demoUrl="https://woznyjakub.github.io/challenge35/"
            >
              <Img fluid={data.challenge35.childImageSharp.fluid} />
            </ImageWrapper>
          </StyledItem>
          <StyledCaption>HTML, Sass, jQuery</StyledCaption>
        </StyledItemWrapper>
      </StyledGrid>
    )}
  />
)

export default Grid
