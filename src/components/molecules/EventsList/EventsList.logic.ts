import dayjs from 'dayjs';
import type { Event } from '../../../utilities/GlobalTypes';

type EventInfo = {
  [key: number]: {
    events: Event[];
    text: string;
  };
};

function useEventsList({ userEvents }: Record<string, Event[]>) {
  const today = dayjs(new Date()).format();

  const todayDate = dayjs(today.split('T')[0]);

  const todaysEvents = userEvents.filter((event) =>
    todayDate.isSame(event.date.split('T')[0])
  );

  const upcomingEvents = userEvents.filter((event) =>
    todayDate.isBefore(event.date.split('T')[0])
  );

  const pastEvents = userEvents.filter((event) =>
    todayDate.isAfter(event.date.split('T')[0])
  );

  const eventInfo: EventInfo = {
    0: {
      events: todaysEvents,
      text: 'No events going on today.',
    },
    1: {
      events: upcomingEvents,
      text: 'No upcoming events.',
    },
    2: {
      events: pastEvents,
      text: "You haven't been in any events yet.",
    },
  };

  return { eventInfo };
}

export default useEventsList;
