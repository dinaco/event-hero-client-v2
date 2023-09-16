import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Global } from '@emotion/react';
import GlobalStyle from './configurations/styles/GlobalStyles';
import { AuthProviderWrapper } from './context/auth.context';
import { theme } from './configurations/styles/Theme';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorFallback from './utilities/ErrorFallback/ErrorFallback';
import ErrorBoundary from './utilities/ErrorBoundary/ErrorBoundary';
import ReactQueryHelper from './utilities/ReactQueryHelper';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: ReactQueryHelper.queryErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: ReactQueryHelper.queryErrorHandler,
  }),
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
const isDevtoolsEnabled =
  import.meta.env.VITE_REACT_QUERY_DEVTOOLS === 'true' ? true : false;

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <ErrorBoundary fallback={(props: any) => <ErrorFallback {...props} />}>
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
