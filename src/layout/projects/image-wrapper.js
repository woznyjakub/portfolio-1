import React, { Component } from 'react'
import styled from 'styled-components'
import githubIcon from '../../images/github.png'

const StyledImageWrapper = styled.div`
  box-shadow: 16px 16px 0 0 ${({ theme }) => theme.colors.semiTransparentBlack};
  margin: 0 1rem 1rem 0;
  position: relative;
`
const StyledItemWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.semiTransparentBlack};
  /* I love safari */
  /* display: grid;
  place-items: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.3s ease-out;
`
const StyledContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`
const StyledGithubIconWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media('landscape')} {
    display: block;
    width: 64px;
  }
  ${({ theme }) => theme.media('tablet')} {
    width: 128px;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    width: 96px;
  }
  ${({ theme }) => theme.media('super-large')} {
    width: 128px;
  }
`
const StyledLink = styled.a`
  display: ${({ itemActive }) => (itemActive ? 'block' : 'none')};
  padding: 0 2rem;
  ${({ theme }) => theme.font('montserrat', '600')}
  line-height: 2em;
  background-color: greenyellow;
  color: ${({ theme }) => theme.colors.lightgrey};
  background-color: ${({ bgColor }) => bgColor};
  text-decoration: none;
  box-shadow: 4px 4px 16px ${({ theme }) => theme.colors.semiTransparentBlack};
  ${({ theme }) => theme.media('desktop-small')} {
    display: block;
    transition: box-shadow 0.1s;
    :hover {
      box-shadow: 4px 8px 32px
        ${({ theme }) => theme.colors.semiTransparentBlack};
    }
  }
`

class ItemWrapper extends Component {
  state = {
    active: false,
    hoverEffectsPermitted:
      typeof window !== 'undefined' ? window.innerWidth >= 900 : true,
  }

  handleWindowResize = () => {
    const newBrakpointListener = window.innerWidth >= 900
    if (newBrakpointListener !== this.brakpointListener) {
      this.setState(() => ({
        hoverEffectsPermitted: newBrakpointListener,
      }))
    }
    this.brakpointListener = newBrakpointListener
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleWindowResize)
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  setItemActive = operationType => {
    this.setState(prevState => {
      let newValue
      if (operationType === 'toggle') newValue = !prevState.active
      else if (operationType) newValue = true
      else if (!operationType) newValue = false
      return { active: newValue }
    })
  }
  render() {
    const { active, hoverEffectsPermitted } = this.state
    const { codeUrl, demoUrl } = this.props
    return (
      <StyledItemWrapper
        active={active}
        onMouseEnter={() =>
          hoverEffectsPermitted ? this.setItemActive(true) : null
        }
        onMouseLeave={() =>
          hoverEffectsPermitted ? this.setItemActive(false) : null
        }
        onClick={() =>
          hoverEffectsPermitted ? null : this.setItemActive('toggle')
        }
      >
        <StyledContentWrapper>
          {codeUrl ? (
            <StyledLink
              href={codeUrl}
              target="_blank"
              bgColor={({ theme }) => theme.colors.red}
              itemActive={active}
              rel="noopener noreferrer"
            >
              Code
            </StyledLink>
          ) : null}
          <StyledGithubIconWrapper>
            <img src={githubIcon} alt="github icon" />
          </StyledGithubIconWrapper>
          {demoUrl ? (
            <StyledLink
              href={demoUrl}
              target="_blank"
              bgColor={({ theme }) => theme.colors.navyblue}
              itemActive={active}
              rel="noopener noreferrer"
            >
              Demo
            </StyledLink>
          ) : null}
        </StyledContentWrapper>
      </StyledItemWrapper>
    )
  }
}

const ImageWrapper = ({ children, className, codeUrl, demoUrl }) => {
  return (
    <StyledImageWrapper className={className}>
      {children}
      <ItemWrapper codeUrl={codeUrl} demoUrl={demoUrl} />
    </StyledImageWrapper>
  )
}

export default ImageWrapper
