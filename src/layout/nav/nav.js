import React, { Component } from 'react'
import styled from 'styled-components'

import { Hamburger } from '../../components'
const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  ${({ theme }) => theme.media('tablet')} {
    width: auto;
  }
`
const StyledList = styled.ul`
  background-color: ${({ theme }) => theme.colors.black};
  font-size: 24px; /* here mustn't be 'em' units */
  color: ${({ theme }) => theme.colors.lightgrey};
  ${({ theme }) => theme.font('sorts mill goudy')};
  text-align: center;
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0.5rem 0;
  position: absolute;
  top: ${({ active }) => (active ? 0 : '-260px')};
  transition: top 1s ${({ theme }) => theme.timingFunctions.scale};

  ${({ theme }) => theme.media('tablet')} {
    display: inline-flex;
    width: auto;
    padding: 0;
    margin-left: 0;
    height: 81px;
    top: 0;
    left: ${({ active }) => (active ? '81px' : '-430px')};
    transition: left 1s ${({ theme }) => theme.timingFunctions.scale};
  }
  ${({ theme }) => theme.media('desktop-large')} {
    font-size: 2em;
    left: ${({ active }) => (active ? '81px' : '-768px')};
  }
`
const StyledItem = styled.li`
  margin-bottom: 0;
  line-height: 2.5em;
  position: relative;
  overflow: hidden;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    z-index: 1;
    top: ${({ active }) => (active ? '-100%' : 0)};
    transition: top ${({ active }) => (active ? 1 : 0)}s;

    transition-delay: ${({ active, order }) =>
      active ? `calc(1s + ${order * 0.2}s)` : '0s'};
  }

  ${({ theme }) => theme.media('tablet')} {
    padding: 0 1rem;
    line-height: 1.75em;
    display: flex;
    align-items: flex-end;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    padding: 0 2rem;
    line-height: 1.5em;
  }
`
const StyledItemContent = styled.span`
  cursor: pointer;
  display: block;

  transform: ${({ active }) =>
    active ? 'translateY(0)' : 'translateY(-16px)'};
  transition: transform ${({ active }) => (active ? '0.65' : 0)}s;
  transition-delay: ${({ active, order }) =>
    active ? `calc(1s + ${order * 0.2}s)` : '0s'};
`
class Nav extends Component {
  state = { menuActive: false }

  componentDidMount = () => {
    this.scrollDestinations = document.querySelectorAll('.scroll-destination')
    this.hamburgerHeight = document.querySelector('.hamburger').offsetHeight
  }

  handleHamburgerClick = () => {
    this.setState(prevState => ({ menuActive: !prevState.menuActive }))
  }

  handleScrollingOnClick = index => {
    // section with transform: skew(negative-value) returns incorrect offsetTop value.
    if (index === 1) {
      window.scroll({
        top:
          this.scrollDestinations[index].offsetTop -
          this.hamburgerHeight +
          window.innerHeight / (window.innerWidth < 768 ? 3 : 5),
        behavior: 'smooth',
      })
    } else {
      window.scroll({
        top: this.scrollDestinations[index].offsetTop - this.hamburgerHeight,
        behavior: 'smooth',
      })
    }
    if (window.innerHeight < 768) this.setState({ menuActive: false })
  }
  render() {
    const { menuActive } = this.state
    const listItemsLabels = ['Home', 'Technologies', 'Projects', 'Contact']
    return (
      <StyledNav>
        <Hamburger
          onClick={this.handleHamburgerClick}
          menuActive={menuActive}
        />
        <StyledList active={menuActive}>
          {listItemsLabels.map((label, i) => (
            <StyledItem key={i} active={menuActive} order={i}>
              <StyledItemContent
                onClick={this.handleScrollingOnClick.bind(this, i)}
                active={menuActive}
                order={i}
              >
                {label}
              </StyledItemContent>
            </StyledItem>
          ))}
        </StyledList>
      </StyledNav>
    )
  }
}

export default Nav
