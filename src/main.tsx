import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Global } from "@emotion/react";
import GlobalStyle from "./GlobalStyles";
import { AuthProviderWrapper } from "./context/auth.context";
import { theme } from "./Theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <AuthProviderWrapper>
          <App />
        </AuthProviderWrapper>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
