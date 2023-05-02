import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/auth.context';
import type { Order } from '../../../utilities/GlobalTypes';
import { useMultipleOrdersQuery } from '../../../hooks/OrdersQueries/OrdersQueries';

function useOrderList() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [eventInfo, setEventInfo] = useState<Event>();
  const [ordersInfo, setOrdersInfo] = useState<Order[]>();
  const [totalSpent, setTotalSpent] = useState(0);
  const [countCompleted, setCountCompleted] = useState(0);
  const { user } = useContext(AuthContext);

  const { data } = useMultipleOrdersQuery(eventId);

  useEffect(() => {
    if (data) {
      const { orders, events } = data;
      let completed = 0;
      const total = orders.reduce((a: number, b: Order) => {
        if (b.status === 'completed') {
          completed++;
          return a + b.total;
        } else return a;
      }, 0);
      setCountCompleted(completed);
      setTotalSpent(total);
      setEventInfo(events[0]);
      setOrdersInfo(orders.reverse());
    }
  }, [data]);

  const handleOrderDetails = (orderId: string) => {
    navigate(`/order/${orderId}`);
  };
  return {
    eventInfo,
    ordersInfo,
    totalSpent,
    countCompleted,
    user,
    handleOrderDetails,
  };
}

export default useOrderList;
