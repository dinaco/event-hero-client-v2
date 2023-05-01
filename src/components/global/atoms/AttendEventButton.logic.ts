import { useSingleEventUpdate } from '../../../hooks/EventsQueries/EventsQueries';
import type { Event } from '../../../utilities/GlobalTypes';
import SnackBar from '../../../utilities/SnackBar';
import { eventsQueriesVars } from '../../../utilities/react-query/constants';

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
  const { mutate, queryClient } = useSingleEventUpdate(id);

  const changeAttendingStatus = () => {
    if (orders.length) {
      SnackBar({
        message: `You can't unattend from an event that you placed orders`,
      });
      return;
    }

    mutate(
      { attending },
      {
        onSuccess: () => {
          setAttending(!attending);
          const queriesToInvalidate = Object.values(eventsQueriesVars).map(
            (key) => key.queryKey
          );
          console.log(queriesToInvalidate);
          queryClient.invalidateQueries();
        },
      }
    );
  };

  return { changeAttendingStatus };
}

export default useAttendEventButton;
