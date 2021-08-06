import { SEARCH_QUERY_SUCCESS } from './SearchQueryConstants';

export const searchQueryDebounced = (keyword) => ({
  type: SEARCH_QUERY_SUCCESS,
  payload: keyword,
  meta: {
    debounce: 500,
  },
});
