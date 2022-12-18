import { css } from "@emotion/react";

const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  body {
    display: flex;
    min-height: 100vh;
  }
  #root {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none !important;
    //color: inherit;
  }
`;

export default GlobalStyle;
