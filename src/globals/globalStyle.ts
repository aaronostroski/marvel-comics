import { createGlobalStyle } from "styled-components";

import { GlobalStyleTypes } from "../types/GlobalStyle";

export const GlobalStyle = createGlobalStyle<GlobalStyleTypes>`
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"), url("../assets/fonts/Roboto 400 Normal.woff2") format("truetype");
    }

    @font-face {
        font-family: "Marvel";
        src: local("Marvel"), url("../assets/fonts/MarvelRegular-Dj83.ttf") format("truetype");
    }

    html,
    body {
        padding: 0;
        margin: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        box-sizing: border-box;
        font-family: ${(props: GlobalStyleTypes) =>
            props.fontFamilyApp}, sans-serif;
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
        background-color: ${(props: GlobalStyleTypes) =>
            props.backgroundColorApp};
        height: 114px;
    }
    h2, h1, p {
        margin: 0;
    }
    input {
        border: none;
    }
    button {
        border: none;
    }
  }
`;
