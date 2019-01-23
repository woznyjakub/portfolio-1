import React from 'react'
import styled from 'styled-components'

const StyledCaption = styled.h3`
  ${({ theme }) => theme.font('montserrat', '600')}
  font-size: 13px;
  text-align: center;
  padding: 0.5rem 0;
`

const Caption = ({ children, className }) => {
  return <StyledCaption className={className}>{children}</StyledCaption>
}

export default Caption
