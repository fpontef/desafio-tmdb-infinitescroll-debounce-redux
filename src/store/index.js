import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  moviePopularReducer,
  movieSearchReducer,
  movieDetailsReducer,
} from './MovieReducers';
import { searchQueryReducer } from './SearchQueryReducer';
import { debounceMiddleware } from './debounceMiddleware';

const rootReducer = combineReducers({
  searchQuery: searchQueryReducer,
  moviePopular: moviePopularReducer,
  movieSearch: movieSearchReducer,
  movieDetails: movieDetailsReducer,
});

// const bookmarkFromStorage = localStorage.getItem('bookmarks')
//   ? JSON.parse(localStorage.getItem('bookmarks'))
//   : null;

// const initialState = {
//   bookmark: { bookmark: bookmarkFromStorage },
// };
const initialState = {};

const middleware = [thunk, debounceMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
