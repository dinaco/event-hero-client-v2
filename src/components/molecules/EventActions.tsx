import { useState } from 'react';
import { Stack } from '@mui/material';
import AttendEventButton from '../global/atoms/AttendEventButton';
import type { Event, UserInfo } from '../../utilities/GlobalTypes';
import OrderButton from '../global/atoms/OrderButton';
import OrderListButton from '../global/atoms/OrderListButton';

type Props = {
  user: UserInfo;
} & Pick<Event, 'customers' | 'staff' | 'takeOrders' | 'orders' | 'id'>;

function EventActions({
  user,
  customers,
  staff,
  takeOrders,
  orders,
  id,
}: Props) {
  const [attending, setAttending] = useState<boolean>(
    customers.some((customer) => customer.id === user?.id) ||
      staff.some((staff) => staff.id === user?.id)
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
          orders={orders}
          id={id}
          setAttending={setAttending}
          attending={attending}
        />
      )}
      {user?.role === 'customer' && attending && (
        <OrderButton disabled={!takeOrders} />
      )}
      {attending && <OrderListButton id={id} disabled={!orders.length} />}
    </Stack>
  );
}

export default EventActions;
