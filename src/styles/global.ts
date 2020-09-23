import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    background: #E5E5E5;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font: 1.25rem Archiv, sans-serif;
  }
`;
