import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 18px;
    font-family: Poppins, sans-serif;
    overflow-x: hidden;
    width: 100%;
  }

  ul {
    list-style-type: none;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.4;
  }
`