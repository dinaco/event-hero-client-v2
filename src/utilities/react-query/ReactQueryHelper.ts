import { QueryKey } from '@tanstack/react-query';
import { Event } from '../GlobalTypes';
import { eventsQueriesVars } from './constants';
export default class ReactQueryHelper {
  /**
   * Returns the {@link QueryKey} to be used on react-query for "storing" the SQL query execution id.
   * @param id sql query id
   */
  public static getQueryKeyForSingleEvent(id: Pick<Event, 'id'>): QueryKey {
    return [
      eventsQueriesVars.rootName,
      eventsQueriesVars.singleEvent.queryKey,
      id,
    ];
  }

  /**
   * Returns the {@link QueryKey} to be used on react-query for "storing" the SQL query results.
   * @param id sql query id
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
   * Returns the {@link QueryKey} to be used on react-query for stopping a SQL query execution.
   * @param id sql query id
   */
  public static getQueryKeyForUserEvents(): QueryKey {
    return [eventsQueriesVars.rootName, eventsQueriesVars.userEvents.queryKey];
  }
}
