import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

type ErrorFallbackProps = {
  error: Error;
};

export const localText = {
  apology:
    "We're sorry: An unexpected error has occurred. Why not try refreshing your page?",
  errorOccurred: (error: Error): string =>
    `The error that occurred is: ${error}`,
  contactUs: (supportUrl: string) => (
    <>
      {' Or you can '}
      <Link to={supportUrl}>{'contact us'}</Link>
      {' if the problem persists.'}
    </>
  ),
};

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  return (
    <Box>
      <Typography>
        {localText.apology}
        {localText.contactUs('/contact')}
      </Typography>
      <Typography>{localText.errorOccurred(error)}</Typography>
      <Button onClick={() => window.location.reload()} variant='contained'>
        {'Refresh The Page'}
      </Button>
    </Box>
  );
};

export default ErrorFallback;
