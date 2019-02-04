import React from 'react'
import styled from 'styled-components'

const StyledCaption = styled.p`
  ${({ theme }) => theme.font('montserrat', '600')}
  font-size: 12px;
  text-align: center;
  margin: 0.25rem 0 1.45rem;
  line-height: 1.25em;
  hyphens: auto;

  ${({ theme }) => theme.media('landscape')} {
    font-size: 13px;
  }
`

const Caption = ({ children, className }) => {
  return <StyledCaption className={className}>{children}</StyledCaption>
}

export default Caption
