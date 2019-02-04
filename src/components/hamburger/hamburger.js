import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHamburger = styled.button`
  display: block;
  border-style: none;
  outline: none !important; /* !important is here cause of firefox implementation */
  padding: 1.625rem 0.75rem 0.75rem;
  --size: 56px;
  width: var(--size);
  height: var(--size);
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 2;
  cursor: pointer;

  ${({ theme }) => theme.media('tablet')} {
    padding: 2.5rem 1rem 1rem;
    --size: 81px;
  }

  ${({ theme }) => theme.media('desktop-small')} {
    :hover {
      ${({ active }) =>
        active ||
        ` span {
            :nth-child(1) {
              left: 25%;
            }
            :nth-child(3) {
              right: 25%;
            }
          }
        `}
    }
  }
`

const StyledLinesWrapper = styled.div`
  position: relative;
  height: 100%;
`
const StyledLine = styled.span`
  --figureHeight: 2px;
  position: absolute;
  left: 0;
  right: 0;
  border-radius: calc(var(--figureHeight) / 2);
  height: var(--figureHeight);
  background-color: ${({ theme }) => theme.colors.lightgrey};
  transition: 0.4s;
  transition-delay: ${({ active }) => (active ? '0.9' : 0)}s;

  :nth-child(1) {
    top: ${({ active }) =>
      active ? 'calc(50% - (var(--figureHeight) / 2))' : 0};
    ${({ active }) => (active ? 'transform: rotate(30deg);' : null)}
  }
  :nth-child(2) {
    top: calc(50% - (var(--figureHeight) / 2));
    opacity: ${({ active }) => (active ? 0 : 1)};
  }
  :nth-child(3) {
    top: ${({ active }) =>
      active
        ? 'calc(50% - (var(--figureHeight) / 2))'
        : 'calc(100% - var(--figureHeight))'};
    ${({ active }) => (active ? 'transform: rotate(-30deg);' : null)}
  }
`
class Hamburger extends Component {
  state = {}

  renderLines = amount => {
    const lines = []
    for (let i = 0; i < amount; i++) {
      lines.push(<StyledLine active={this.props.menuActive} key={i} />)
    }
    return lines
  }

  render() {
    const { menuActive, onClick } = this.props
    return (
      <StyledHamburger
        onClick={onClick}
        active={menuActive}
        className="hamburger"
      >
        <StyledLinesWrapper>{this.renderLines(3)}</StyledLinesWrapper>
      </StyledHamburger>
    )
  }
}

export default Hamburger
