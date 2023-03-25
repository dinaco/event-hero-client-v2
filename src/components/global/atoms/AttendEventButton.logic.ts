import useServerAPI from '../../../configurations/API/ServerAPI';
import type { Event } from '../../../utilities/GlobalTypes';
import SnackBar from '../../../utilities/SnackBar';

export type AttendingEventProps = {
  attending: boolean;
  setAttending: (attending: boolean) => void;
} & Pick<Event, 'orders' | 'id'>;

function useAttendEventButton({
  attending,
  setAttending,
  orders,
  id,
}: AttendingEventProps) {
  const { putRequest } = useServerAPI();

  const changeAttendingStatus = () => {
    if (orders.length) {
      SnackBar({
        message: `You can't unattend from an event that you placed orders`,
      });
      return;
    }

    const body = { attending };
    putRequest(`/api/event/${id}`, body)
      .then(() => {
        setAttending(!attending);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return { changeAttendingStatus };
}

export default useAttendEventButton;
