import React from 'react'
import styled from 'styled-components'

import { Container, Heading } from '../../../components'

import Grid from './grid'

const StyledContainer = styled(Container)`
  max-width: 1920px;
  padding-bottom: 0;
  ${({ theme }) => theme.media('tablet')} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  ${({ theme }) => theme.media('desktop-small')} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  ${({ theme }) => theme.media('super-large')} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`
const WebDevChallenges = () => {
  return (
    <section className="padding-responsive-top scroll-destination">
      <Heading>My "PSD to HTML" projects</Heading>
      <StyledContainer>
        <Grid />
      </StyledContainer>
    </section>
  )
}

export default WebDevChallenges
