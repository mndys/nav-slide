import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        --size-xs: .1rem;
        --size-s: .3rem;
        --size-m: .5rem;
        --size-l: 1rem;
        --size-xl: 1.5rem;
        --color-bg: #222;
        --color-primary: #000;
        --color-text: #e3e3e3;
    }

    body {
        margin: 0;
        background: var(--color-bg);
        color: var(--color-text);
        font-family: 'Open Sans';
    }
`
export default GlobalStyle
