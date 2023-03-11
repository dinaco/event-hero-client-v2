import { Link } from 'react-router-dom';
import { Typography, Stack } from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCard';

function Balance({ balance }: Record<string, number>) {
  return (
    <Stack>
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        px={4}
        py={1}
        variant='h5'
        component='div'
        gutterBottom
      >
        Balance € {balance.toFixed(2)}
        <Link to={`/add-funds`}>
          <AddCardIcon sx={{ fontSize: 35 }} />
        </Link>
      </Typography>
    </Stack>
  );
}

export default Balance;
