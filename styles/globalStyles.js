import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Poppins', sans-serif;
    color: #343434;
  }

  h1 {
    font-weight: 700;
    font-size: 36px;
  }

  h2 {
    font-weight: 600;
    font-size: 30px;
  }
`;

export default GlobalStyles;
