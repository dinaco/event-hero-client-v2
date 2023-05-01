import { useSingleEventUpdate } from '../../../hooks/EventsQueries/EventsQueries';
import type { Event } from '../../../utilities/GlobalTypes';
import SnackBar from '../../../utilities/SnackBar';
import { eventsQueriesVars } from '../../../utilities/react-query/constants';

export type AttendingEventProps = {
  attending: boolean;
} & Pick<Event, 'orders' | 'id'>;

function useAttendEventButton({ attending, orders, id }: AttendingEventProps) {
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
          queryClient.invalidateQueries([eventsQueriesVars.rootName]);
        },
      }
    );
  };

  return { changeAttendingStatus };
}

export default useAttendEventButton;
