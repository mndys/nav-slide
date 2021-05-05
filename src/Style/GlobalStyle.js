import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background: #333;
        color: whitesmoke;
        font-family: 'Open Sans';
    }

    li {
        margin: .5rem 1rem;
        padding: .3rem .7rem;
    }
`
export default GlobalStyle