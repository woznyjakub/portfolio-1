import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../css/theme'
import '../css/reset.css'
import GlobalStyle from '../css/global-style'

import { Header } from '../layout'
import { Skills } from '../layout'

import { MainContainer } from '../components'
import { SEO } from '../components'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <MainContainer>
          <Header />
          <Skills />
          <div style={{ height: `130vh` }} />
        </MainContainer>
      </>
    </ThemeProvider>
  </>
)

export default IndexPage
