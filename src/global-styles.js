import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: anitialised;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: #333;
        font-size: 16px;
    }

    :root {
        --max-width: 1100px;
    }
`;
