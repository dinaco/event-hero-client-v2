import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/auth.context';
import useServerAPI from '../../../configurations/API/ServerAPI';
import type { Order } from '../../../utilities/GlobalTypes';

function useOrderList() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [eventInfo, setEventInfo] = useState<Event>();
  const [ordersInfo, setOrdersInfo] = useState<Order[]>();
  const [totalSpent, setTotalSpent] = useState(0);
  const [countCompleted, setCountCompleted] = useState(0);
  const { user } = useContext(AuthContext);

  const { fetchRequest, isLoading } = useServerAPI();

  useEffect(() => {
    fetchRequest(`/api/orders/${eventId}`).then((response) => {
      const { orders, events } = response.data;
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
    });
  }, []);

  const handleOrderDetails = (orderId: string) => {
    navigate(`/order/${orderId}`);
  };
  return {
    isLoading,
    eventInfo,
    ordersInfo,
    totalSpent,
    countCompleted,
    user,
    handleOrderDetails,
  };
}

export default useOrderList;
