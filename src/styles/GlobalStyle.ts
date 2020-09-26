import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FFF6FF;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100vh;
  }

  body, button {
    font: 400 1.6rem Roboto, sans-serif;
    color: #1a1c20;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    font-family: Epilogue, sans-serif;
  }
`;
