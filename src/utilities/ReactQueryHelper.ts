import { QueryKey } from '@tanstack/react-query';
import { Event } from './GlobalTypes';
import { eventsQueriesVars } from '../hooks/EventsQueries/EventsQueriesHooks.static';
import { ordersQueriesVars } from '../hooks/OrdersQueries/OrdersQueriesHooks.static';
import { authQueriesVars } from '../hooks/AuthQueries/AuthQueriesHooks.static';
export default class ReactQueryHelper {
  /**
   * Returns the {@link QueryKey} to be used on react-query for "storing" the Event information.
   * @param id event id
   */
  public static getQueryKeyForSingleEvent(
    eventId: Pick<Event, 'id'>
  ): QueryKey {
    return [
      eventsQueriesVars.rootName,
      eventsQueriesVars.singleEvent.queryKey,
      eventId,
    ];
  }

  /**
   * Returns the {@link QueryKey} to be used on react-query for "storing" a list of events.
   * @param debouncedSearchParams is the input text typed in the search box on home page to search for a specific event
   */
  public static getQueryKeyForeMultipleEvents(
    debouncedSearchParams = ''
  ): QueryKey {
    return [
      eventsQueriesVars.rootName,
      eventsQueriesVars.multipleEvents.queryKey,
      debouncedSearchParams,
    ];
  }

  /**
   * Returns the {@link QueryKey} to be used on react-query for "storing" a list of the users attending events.
   */
  public static getQueryKeyForUserEvents(): QueryKey {
    return [eventsQueriesVars.rootName, eventsQueriesVars.userEvents.queryKey];
  }

  /**
   * Returns the {@link QueryKey} to be used on react-query for "storing" a list of orders for a single event.
   * @param id event id
   */
  public static getQueryKeyForSingleEventOrders(
    eventId: string | undefined
  ): QueryKey {
    return [
      ordersQueriesVars.rootName,
      ordersQueriesVars.multipleOrders.queryKey,
      eventId,
    ];
  }

  /**
   * Returns the {@link QueryKey} to be used on react-query for "storing" a list of orders for a single event.
   * @param id event id
   */
  public static getQueryKeyForUserSignIn(
    eventId: string | undefined
  ): QueryKey {
    return [authQueriesVars.rootName, authQueriesVars.signIn.queryKey, eventId];
  }
}
