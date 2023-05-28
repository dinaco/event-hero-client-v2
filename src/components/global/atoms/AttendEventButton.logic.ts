import { useSingleEventUpdate } from '../../../hooks/EventsQueries/EventsQueriesHooks';
import { eventsQueriesVars } from '../../../hooks/EventsQueries/EventsQueriesHooks.static';
import type { Event } from '../../../utilities/GlobalTypes';
import SnackBar from '../../../utilities/SnackBar';

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
          /*           Object.values(eventsQueriesVars).map((key) =>
            queryClient.invalidateQueries([key.queryKey])
          ); */
          // queryClient.invalidateQueries([eventsQueriesVars.rootName]);
          const { rootName, multipleEvents, singleEvent, userEvents } =
            eventsQueriesVars;
          queryClient.refetchQueries([rootName, multipleEvents.queryKey]);
          queryClient.invalidateQueries([rootName, singleEvent.queryKey, id]);
          queryClient.invalidateQueries([rootName, userEvents.queryKey]);
        },
      }
    );
  };

  return { changeAttendingStatus };
}

export default useAttendEventButton;
