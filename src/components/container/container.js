import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 0.5rem;

  ${({ theme }) => theme.media('landscape')} {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    padding-top: 5rem;
    padding-bottom: 6rem;
  }
`

const Container = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default Container
