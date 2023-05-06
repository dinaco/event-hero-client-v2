export const eventsQueriesVars = {
  rootName: 'events',
  userEvents: { queryKey: 'userEvent', endPoint: '/api/my-events' },
  multipleEvents: { queryKey: 'multipleEvents', endPoint: '/api/events' },
  singleEvent: { queryKey: 'singleEvent', endPoint: '/api/event/' },
};

export const ordersQueriesVars = {
  rootName: 'orders',
  multipleOrders: { queryKey: 'multipleOrders', endPoint: '/api/orders/' },
};
