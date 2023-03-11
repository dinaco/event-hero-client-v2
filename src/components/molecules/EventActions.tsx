import { useContext, useState } from 'react';
import { Stack } from '@mui/material';
import AttendEventButton from '../global/atoms/AttendEventButton';
import { AuthContext } from '../../context/auth.context';
import type { Event } from '../../utilities/GlobalTypes';
import OrderButton from '../global/atoms/OrderButton';
import OrderListButton from '../global/atoms/OrderListButton';

function EventActions({ event }: Record<string, Event>) {
  const { user } = useContext(AuthContext);

  const [attending, setAttending] = useState<boolean>(
    event.customers.some((customer) => customer.id === user?.id) ||
      event.staff.some((staff) => staff.id === user?.id)
  );

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      spacing={0.5}
      my={4}
    >
      {user?.role === 'customer' && (
        <AttendEventButton
          event={event}
          setAttending={setAttending}
          attending={attending}
        />
      )}
      {user?.role === 'customer' && event.takeOrders && attending && (
        <OrderButton />
      )}
      {attending && <OrderListButton event={event} />}
    </Stack>
  );
}

export default EventActions;
