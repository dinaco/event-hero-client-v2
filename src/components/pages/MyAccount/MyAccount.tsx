import { Paper, Typography, Stack } from '@mui/material';
import LoadingImg from '../../global/atoms/LoadingImg';
import Balance from '../../molecules/Balance';
import TabEvents from './TabEvents/TabEvents';
import useMyAccount from './MyAccount.logic';

function MyAccount() {
  const { userInfo } = useMyAccount();

  if (!userInfo) {
    return <LoadingImg />;
  }

  return (
    <Stack spacing={2}>
      <Paper elevation={20}>
        <Typography px={4} py={1} variant='h4' component='div' gutterBottom>
          Hi, {userInfo.name}
        </Typography>
        {userInfo.role === 'customer' && <Balance balance={userInfo.balance} />}
      </Paper>
      <TabEvents userEvents={userInfo.events} />
    </Stack>
  );
}

export default MyAccount;
