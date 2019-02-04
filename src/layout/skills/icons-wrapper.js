import React from 'react'
import styled from 'styled-components'

const StyledIconsWrapper = styled.div`
  flex-basis: ${({ childAmount }) =>
    childAmount % 2 === 0 && childAmount % 3 !== 0 ? '20%' : '26%'};
  max-width: 96px;

  ${({ theme }) => theme.media('tablet')} {
    flex-basis: ${({ childAmount }) =>
      childAmount % 2 === 0 && childAmount % 3 !== 0 ? '21%' : '13%'};
    ${({ childAmount }) =>
      childAmount % 2 === 0 && childAmount % 3 !== 0
        ? 'margin: 0 0.5rem;'
        : null};
  }

  ${({ theme }) => theme.media('desktop-small')} {
    margin: 0 0.5rem;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    margin: 0 1rem;
  }
`

const IconsWrapper = ({ childAmount, children }) => (
  <StyledIconsWrapper childAmount={childAmount}>{children}</StyledIconsWrapper>
)

export default IconsWrapper
