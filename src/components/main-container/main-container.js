import React from 'react'
import styled from 'styled-components'

const StyledMainContainer = styled.div`
  overflow-x: hidden;
`
const MainContainer = ({ children }) => {
  return <StyledMainContainer>{children}</StyledMainContainer>
}

export default MainContainer
