import React from 'react'
import styled from 'styled-components'

const StyledRectangle = styled.span`
  position: absolute;
  --size: 0px;
  width: var(--size);
  height: var(--size);
  transform: translate(-50%, -50%) rotate(45deg);
`
const Rectangle = () => <StyledRectangle />

export default Rectangle
