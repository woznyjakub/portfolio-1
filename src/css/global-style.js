import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600|Sorts+Mill+Goudy&subset=latin-ext');

    .padding-responsive-top {
        padding-top: 1rem;
    }
    ${({ theme }) => theme.media('tablet')} {
        .padding-responsive-top {
            padding-top: 2rem;
        }
    }
    ${({ theme }) => theme.media('desktop-large')} {
        .padding-responsive-top {
            padding-top: 3rem;
        }
    }
`
export default GlobalStyle
