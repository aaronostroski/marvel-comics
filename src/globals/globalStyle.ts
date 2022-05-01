import { createGlobalStyle } from "styled-components";

import { GlobalStyleTypes } from "../types/GlobalStyle";

export const GlobalStyle = createGlobalStyle<GlobalStyleTypes>`
    html,
    body {
        padding: 0;
        margin: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        border-box: box-sizing;
    }
    a, a:hover, a:focus, a:active {
        text-decoration: none;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0; 
    }
    nav {
        background-color: ${(props: GlobalStyleTypes) => props.backgroundColor};
        height: 114px;
    }
    h2, h1, p {
        margin: 0;
    }
  }
`;
