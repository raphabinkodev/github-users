import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    background: #CCC;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font: 1.25rem Archivo, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
