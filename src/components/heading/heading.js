import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h2`
  font-family: 'sorts mill goudy', sans-serif;
  text-align: center;
  font-size: 1.75em;
  margin-bottom: 0;
  padding: 0 0.5rem;

  ${({ theme }) => theme.media('desktop-large')} {
    font-size: 2.75em;
  }
`
const Heading = ({ children, className }) => {
  return <StyledHeading className={className}>{children}</StyledHeading>
}

export default Heading
