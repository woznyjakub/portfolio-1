import React from 'react'
import styled from 'styled-components'

const StyledParagraph = styled.p`
  ${({ theme }) => theme.font('montserrat')}
  line-height: 2em;
  font-size: 14px;
  max-width: 800px;
  margin: 0 auto;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  hyphens: auto;

  ${({ theme }) => theme.media('landscape')} {
    font-size: 15px;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    font-size: inherit;
  }
`
const Paragraph = ({ children, className }) => (
  <StyledParagraph className={className}>{children}</StyledParagraph>
)

export default Paragraph
