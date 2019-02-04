import React from 'react'
import styled from 'styled-components'

import { Container, Heading } from '../../../components'

import Grid from './grid'

const StyledContainer = styled(Container)`
  max-width: 1920px;
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
const LatestProjects = () => {
  return (
    <section className="padding-responsive-top">
      <Heading>Latest projects</Heading>
      <StyledContainer>
        <Grid />
      </StyledContainer>
    </section>
  )
}

export default LatestProjects
