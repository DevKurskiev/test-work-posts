import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    transition-duration: .3s;
  }

  html,
  body,
  #root{
    height: 100%;
    overflow-x: hidden;
    background: white;
  }
`;
