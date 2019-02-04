import React from 'react'
import styled from 'styled-components'

import { Container } from '../../components'

import Background from '../../images/blocks.jpg'
const StyledHeader = styled.header`
  background: url(${Background}) 100% 0% / 125% no-repeat;
  background-color: ${({ theme }) => theme.colors.lightgrey};
  font-family: 'Sorts Mill Goudy', serif;

  ${({ theme }) => theme.media('landscape')} {
    background-size: contain;
  }
`
const StyledContainer = styled(Container)`
  display: grid;
  place-items: end start;
  min-height: 80vh;
  max-width: 1500px;

  ${({ theme }) => theme.media('desktop-small')} {
    padding: 4rem;
    min-height: 90vh;
  }
`

const StyledWrapper = styled.div`
  padding: 4rem 0.5rem;
  font-size: 1.5em;

  ${({ theme }) => theme.media('landscape')} {
    padding: 2rem 1rem;
  }
  ${({ theme }) => theme.media('tablet')} {
    font-size: 2.25em;
  }
  ${({ theme }) => theme.media('super-large')} {
    font-size: 2.75em;
    padding: 4rem 2rem;
  }
`
const StyledHeading = styled.h1`
  line-height: 1.35em;
  font-family: inherit;
  font-size: ${({ fontSize }) => fontSize};
  margin-bottom: 0;
`

const Header = () => (
  <StyledHeader className="scroll-destination">
    <StyledContainer>
      <StyledWrapper>
        <StyledHeading fontSize="1.75em">Jakub Woźny</StyledHeading>
        <StyledHeading as="h2" fontSize="1.45em">
          Front end developer
        </StyledHeading>
        <StyledHeading as="h3" fontSize="1.25em">
          Portfolio
        </StyledHeading>
      </StyledWrapper>
    </StyledContainer>
  </StyledHeader>
)

export default Header
