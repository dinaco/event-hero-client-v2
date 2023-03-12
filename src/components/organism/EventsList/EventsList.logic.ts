import dayjs from 'dayjs';
import type { Event } from '../../../utilities/GlobalTypes';
import { localText } from './EventsList.static';

type EventInfo = {
  [key: number]: {
    events: Event[];
    noEventsText: string;
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

  const allAvailableFutureEvents = userEvents;

  const eventInfo: EventInfo = {
    0: {
      events: todaysEvents,
      noEventsText: localText.noTodaysEvents,
    },
    1: {
      events: upcomingEvents,
      noEventsText: localText.noUpcomingEvents,
    },
    2: {
      events: pastEvents,
      noEventsText: localText.noPastEvents,
    },
    3: {
      events: allAvailableFutureEvents,
      noEventsText: localText.noAllAvailableFutureEvents,
    },
  };

  return { eventInfo };
}

export default useEventsList;
