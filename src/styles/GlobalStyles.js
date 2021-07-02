import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    font-family: 'Raleway', sans-serif;

    font-size: 62.5%;
  }

  html, body, #root {
    min-height: 100vh;
    font-size: 1.6rem;
  }
`