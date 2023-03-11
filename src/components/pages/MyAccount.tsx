import { useState, useEffect } from 'react';
import { Paper, Typography, Stack } from '@mui/material';
import LoadingImg from '../global/atoms/LoadingImg';
import useServerAPIv2 from '../../configurations/API/ServerAPIv2';
import Balance from '../molecules/Balance';
import TabEvents from '../molecules/TabEvents';
import type { UserInfo } from '../../utilities/GlobalTypes';

function MyAccount() {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const { fetchRequest } = useServerAPIv2();

  useEffect(() => {
    fetchRequest('/api/my-events')
      .then((response) => {
        setUserInfo(response?.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

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
