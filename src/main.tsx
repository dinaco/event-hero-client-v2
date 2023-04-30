import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Global } from '@emotion/react';
import GlobalStyle from './configurations/styles/GlobalStyles';
import { AuthProviderWrapper } from './context/auth.context';
import { theme } from './configurations/styles/Theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './utilities/ErrorFallback/ErrorFallback';

const queryClient = new QueryClient();
const isDevtoolsEnabled =
  import.meta.env.VITE_REACT_QUERY_DEVTOOLS !== 'true' ? false : true;

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <ErrorBoundary fallbackRender={(props) => <ErrorFallback {...props} />}>
          <QueryClientProvider client={queryClient}>
            <AuthProviderWrapper>
              <App />
            </AuthProviderWrapper>
            {isDevtoolsEnabled && <ReactQueryDevtools initialIsOpen={false} />}
          </QueryClientProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </Router>
  </StrictMode>
);
