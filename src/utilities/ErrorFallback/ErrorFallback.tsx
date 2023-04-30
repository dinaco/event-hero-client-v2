import { FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

interface ErrorFallbackProps extends FallbackProps {
  error: Error;
}

export const localText = {
  apology:
    "We're sorry: An unexpected error has occurred. Why not try refreshing your page?",
  errorOccurred: (error: Error): string =>
    `The error that occurred is: ${error.message}`,
  contactUs: (supportUrl: string) => (
    <>
      {' Or you can '}
      <Link to={supportUrl}>{'contact us'}</Link>
      {' if the problem persists.'}
    </>
  ),
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <>
      <Typography>
        {localText.apology}
        {localText.contactUs('/contact')}
      </Typography>
      <Typography>{localText.errorOccurred(error)}</Typography>
    </>
  );
};

export default ErrorFallback;
