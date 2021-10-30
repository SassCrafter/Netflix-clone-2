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
        --primary-color: #e50914;
        --secondary-color: #0071eb;
        --error-color: #ffa00a;
    }

    .mb-1 {
        margin-bottom: 10px;
    }
    .mb-2 {
        margin-bottom: 20px;
    }
    .mb-3 {
        margin-bottom: 30px;
    }
    .mb-4 {
        margin-bottom: 40px;
    }
    .mb-5 {
        margin-bottom: 50px;
    }

    .mt-1 {
        margin-top: 10px;
    }
    .mt-2 {
        margin-top: 20px;
    }
    .mt-3 {
        margin-top: 30px;
    }
    .mt-4 {
        margin-top: 40px;
    }
    .mt-5 {
        margin-top: 50px;
    }

    .m-1 {
        margin: 10px 0;
    }
    .m-2 {
        margin: 20px 0;
    }
    .m-3 {
        margin: 30px 0;
    }
    .m-4 {
        margin: 40px 0;
    }
    .m-5 {
        margin: 50px 0;
    }
`;
