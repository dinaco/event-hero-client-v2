enum Path {
  UserEvents = '/api/my-events',
  MultipleEvents = '/api/events',
  SingleEvent = '/api/event/',
}

enum Key {
  UserEvents = 'userEvents',
  MultipleEvents = 'multipleEvents',
  SingleEvent = 'singleEvent',
}

const limitEventsInfiniteQuery = 2;

export const eventsQueriesVars = {
  rootName: 'events',
  userEvents: { queryKey: Key.UserEvents, endPoint: Path.UserEvents },
  multipleEvents: {
    queryKey: Key.MultipleEvents,
    endPoint: Path.MultipleEvents,
    limitEventsInfiniteQuery,
  },
  singleEvent: { queryKey: Key.SingleEvent, endPoint: Path.SingleEvent },
};
