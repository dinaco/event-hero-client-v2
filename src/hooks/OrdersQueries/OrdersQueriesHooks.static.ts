enum Path {
  MultipleOrders = '/api/orders/',
}

enum Key {
  MultipleOrders = 'multipleOrders',
}

export const ordersQueriesVars = {
  rootName: 'orders',
  multipleOrders: {
    queryKey: Key.MultipleOrders,
    endPoint: Path.MultipleOrders,
  },
};
