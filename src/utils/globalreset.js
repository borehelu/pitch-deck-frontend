import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-size: 16px;
    background: #f5f5f5;
    margin: 0;
    font-family: 'Dosis', sans-serif;
  }
  p{
    line-height: 1.5;
  }


`;

export default GlobalStyles;
