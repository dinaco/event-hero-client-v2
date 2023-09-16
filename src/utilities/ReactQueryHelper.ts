import { QueryKey } from '@tanstack/react-query';
import { eventsQueriesVars } from '../hooks/EventsQueries/EventsQueriesHooks.static';
import { ordersQueriesVars } from '../hooks/OrdersQueries/OrdersQueriesHooks.static';
import { authQueriesVars } from '../hooks/AuthQueries/AuthQueriesHooks.static';
import SnackBar from './SnackBar';
export default class ReactQueryHelper {
  /**
   * Returns the {@link QueryKey} to be used on react-query for "storing" the Event information.
   * @param id event id
   */
  public static getQueryKeyForSingleEvent(eventId: string): QueryKey {
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
   * Returns the {@link QueryKey} to be used on react-query for "storing" users login credentials.
   */
  public static getQueryKeyForUserLogin(): QueryKey {
    return [authQueriesVars.rootName, authQueriesVars.login.queryKey];
  }

  public static queryErrorHandler(error: unknown) {
    // error is type unknown because in js, anything can be an error (e.g. throw(5))
    const toastId = 'react-query-error';
    const message =
      error instanceof Error
        ? // remove the initial 'Error: ' that accompanies many errors
          error.toString().replace(/^Error:\s*/, '')
        : 'error connecting to server';

    SnackBar({ message, type: 'error', toastId });
  }
}
