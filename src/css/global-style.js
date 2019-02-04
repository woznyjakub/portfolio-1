import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600|Sorts+Mill+Goudy&subset=latin-ext');

    body {
        background-color: ${({ theme }) => theme.colors.lightgrey};
        ::-webkit-scrollbar {
            width: 16px;
        }
        ::-webkit-scrollbar-track {
            background-color: #333;
        }
        ::-webkit-scrollbar-button {
            background: #333;
            height: 4px;
        }
        ::-webkit-scrollbar-thumb {
            background-image: linear-gradient(
                90deg,
                transparent 0px,
                transparent 4px,
                #888 5px,
                #888 11px,
                transparent 12px,
                transparent 16px
            );
            border-radius: 8px;
        }
    }

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
