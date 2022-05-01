import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyle } from "./globals/globalStyle";
import theme from "./globals/theme";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle
                backgroundColorApp={theme.backgroundColorApp}
                fontFamilyApp={theme.fontFamilyApp}
            />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
