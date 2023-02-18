import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Global } from '@emotion/react';
import GlobalStyle from './configurations/styles/GlobalStyles';
import { AuthProviderWrapper } from './context/auth.context';
import { theme } from './configurations/styles/Theme';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <AuthProviderWrapper>
          <App />
        </AuthProviderWrapper>
      </ThemeProvider>
    </Router>
  </StrictMode>
);
