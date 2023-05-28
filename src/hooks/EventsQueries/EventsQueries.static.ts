export const eventsQueriesVars = {
  rootName: 'events',
  userEvents: { queryKey: 'userEvent', endPoint: '/api/my-events' },
  multipleEvents: {
    queryKey: 'multipleEvents',
    endPoint: '/api/events',
    limitEventsInfiniteQuery: 2,
  },
  singleEvent: { queryKey: 'singleEvent', endPoint: '/api/event/' },
};
