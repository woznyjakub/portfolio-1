import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../css/theme'
import '../css/reset.css'
import GlobalStyle from '../css/global-style'

import { Header, Skills, Projects, Footer, Nav } from '../layout'

import { MainContainer, SEO } from '../components'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <MainContainer>
          <Nav />
          <Header />
          <Skills />
          <Projects />
          <Footer />
        </MainContainer>
      </>
    </ThemeProvider>
  </>
)

export default IndexPage
