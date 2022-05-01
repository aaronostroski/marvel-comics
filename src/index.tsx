import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

import { GlobalStyle } from "./globals/globalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle backgroundColor="White" />
    <App />
  </React.StrictMode>
);

reportWebVitals();
