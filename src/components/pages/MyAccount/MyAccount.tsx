import { Paper, Typography, Stack } from '@mui/material';
import LoadingImg from '../../global/atoms/LoadingImg';
import Balance from '../../molecules/Balance';
import TabEvents from './TabEvents/TabEvents';
import { useUserEventsQuery } from '../../../hooks/EventsQueries/EventsQueries';

function MyAccount() {
  const { data: UserInfo, isLoading } = useUserEventsQuery();

  if (isLoading) {
    return <LoadingImg />;
  }

  return (
    <Stack spacing={2}>
      <Paper elevation={20}>
        <Typography px={4} py={1} variant='h4' component='div' gutterBottom>
          Hi, {UserInfo.name}
        </Typography>
        {UserInfo.role === 'customer' && <Balance balance={UserInfo.balance} />}
      </Paper>
      <TabEvents userEvents={UserInfo.events} />
    </Stack>
  );
}

export default MyAccount;
