import useServerAPI from '../../../configurations/API/ServerAPI';
import type { Event } from '../../../utilities/GlobalTypes';

type Props = {
  attending: boolean;
  setAttending: (attending: boolean) => void;
  event: Event;
};

function useAttendEventButton({ attending, setAttending, event }: Props) {
  const { putRequest } = useServerAPI();

  const changeAttendingStatus = () => {
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
