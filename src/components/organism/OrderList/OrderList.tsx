import { Typography, Stack, Paper, Chip, Box } from '@mui/material';
import dayjs from 'dayjs';
import LoadingImg from '../../global/atoms/LoadingImg';
import EventCard from '../EventCard';
import useOrderList from './OrderList.logic';

function OrderList() {
  const {
    isLoading,
    eventInfo,
    ordersInfo,
    totalSpent,
    countCompleted,
    user,
    handleOrderDetails,
  } = useOrderList();

  if (isLoading) {
    return <LoadingImg />;
  }

  return (
    <Box>
      <EventCard {...eventInfo} />
      <Stack spacing={2}>
        <Typography px={4} variant='h5' gutterBottom>
          {user?.role === 'customer' && (
            <span>Total spent: € {totalSpent.toFixed(2)}</span>
          )}
          {user?.role === 'event-staff' && ordersInfo && (
            <>
              <span>All Orders: {ordersInfo.length}</span> |
              <span>
                Processing Orders: {ordersInfo.length - countCompleted}
              </span>
              |<span>Completed Orders: {countCompleted}</span>
            </>
          )}
        </Typography>
        {!ordersInfo && (
          <p>
            <b>No orders found for this event</b>
          </p>
        )}
        {ordersInfo?.map((order) => {
          return (
            <Paper
              onClick={() => handleOrderDetails(order.id)}
              key={order.id}
              elevation={20}
            >
              <Stack
                px={4}
                py={1}
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Typography variant='h6' gutterBottom>
                  #{order.id.slice(-6)}
                </Typography>
                <Chip
                  label={order.status}
                  color={order.status === 'completed' ? 'success' : 'warning'}
                />
              </Stack>
              <Typography
                px={4}
                py={1}
                variant='h6'
                component='div'
                gutterBottom
              >
                {dayjs(order.createdAt).format('DD/MM/YYYY | HH:mm')}
              </Typography>
              <Typography
                px={4}
                py={1}
                variant='h6'
                component='div'
                gutterBottom
              >
                € {order.total.toFixed(2)}
              </Typography>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
}

export default OrderList;
