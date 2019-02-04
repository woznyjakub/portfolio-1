import React from 'react'
import styled from 'styled-components'

import { Container, Caption, Heading } from '../../components'
import linkedInIcon from '../../images/linkedin.svg'
import facebookIcon from '../../images/facebook.svg'

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkgrey};
  position: relative;
  ${({ theme }) => theme.media('tablet')} {
    ::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 100%;
      border-left: 100vw solid ${({ theme }) => theme.colors.transparent};
      border-bottom: 1.5rem solid ${({ theme }) => theme.colors.darkgrey};
    }
  }
  ${({ theme }) => theme.media('super-large')} {
    ::before {
      border-bottom-width: 2.5rem;
    }
  }
`
const StyledContainer = styled(Container)`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  ${({ theme }) => theme.media('tablet')} {
    padding-top: 0.25rem;
  }
`
const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.lightgrey};
`
const StyledIconsWrapper = styled.div`
  display: flex;
  max-width: 80px;
  margin: 0.5rem auto;
  justify-content: space-between;
`

const StyledIcon = styled.img`
  width: 32px;
  height: 32px;
`
const StyledCaption = styled(Caption)`
  line-height: 1.75em;
  color: ${({ theme }) => theme.colors.lightgrey};
  margin-bottom: 0;
  a {
    color: inherit;
    text-decoration: none;
  }
  ${({ space }) => (space ? `padding-bottom: 0.5rem;` : null)}
`
const Footer = () => {
  return (
    <StyledFooter className="scroll-destination">
      <StyledContainer>
        <StyledHeading>Contact</StyledHeading>
        <StyledIconsWrapper>
          <a
            href="https://www.facebook.com/kuba.wozny.96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon src={facebookIcon} alt="facebook icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jakub-wo%C5%BAny-98840b17a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon src={linkedInIcon} alt="linked in icon" />
          </a>
        </StyledIconsWrapper>
        <StyledCaption space>E-mail: jakub_wozny_01@wp.pl</StyledCaption>
        <StyledCaption>Copyright &copy; Jakub Woźny 2019</StyledCaption>
        <StyledCaption>
          Header background designed by{' '}
          <a
            href="https://www.freepik.com/free-vector/white-business-background_2740448.htm"
            rel="noopener noreferrer"
          >
            BiZkettE1 - www.freepik.com{', '}
          </a>
          linux icon made by{' '}
          <a
            href="https://www.freepik.com/"
            title="Freepik"
            rel="noopener noreferrer"
          >
            Freepik
          </a>{' '}
          from{' '}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            rel="noopener noreferrer"
          >
            www.flaticon.com
          </a>{' '}
          is licensed by{' '}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC 3.0 BY
          </a>
        </StyledCaption>
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer
