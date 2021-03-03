import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  *{
    box-sizing:border-box;
    font-family: "Noto Sans KR", sans-serif;
    &:focus {
      outline: none;
    }
  }

  body {
    @import url("https://use.fontawesome.com/releases/v5.15.2/css/all.css");
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap");
  }

  a,
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }
`;

export default GlobalStyle;
