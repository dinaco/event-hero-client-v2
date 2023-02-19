import { Card, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Card sx={{ width: '100%', p: 4 }}>
      <Typography variant='h5' gutterBottom component='div'>
        404 - Page Not Found
      </Typography>
      <Typography variant='h5' gutterBottom component='div'>
        <Link to='/'>Click here to go back home!</Link>
      </Typography>
    </Card>
  );
}

export default NotFound;
