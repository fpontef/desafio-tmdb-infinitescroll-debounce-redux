import {
  SEARCH_QUERY_RESET,
  SEARCH_QUERY_SUCCESS,
} from './SearchQueryConstants';

const searchInitialState = {
  keyword: '',
};

export const searchQueryReducer = (state = searchInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_QUERY_SUCCESS:
      return {
        keyword: payload,
      };
    case SEARCH_QUERY_RESET:
      return {
        keyword: '',
      };
    default:
      return state;
  }
};
