import useServerAPI from '../../../configurations/API/ServerAPI';
import type { Event } from '../../../utilities/GlobalTypes';
import SnackBar from '../../../utilities/SnackBar';

type Props = {
  attending: boolean;
  setAttending: (attending: boolean) => void;
  event: Event;
};

function useAttendEventButton({ attending, setAttending, event }: Props) {
  const { putRequest } = useServerAPI();

  const changeAttendingStatus = () => {
    if (event.orders.length) {
      SnackBar({
        message: `You can't unattend from an event that you placed orders`,
      });
      return;
    }

    const body = { attending };
    putRequest(`/api/event/${event.id}`, body)
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
