import uniqBy from 'lodash.uniqby';
import {
  MOVIE_POPULAR_REQUEST,
  MOVIE_POPULAR_SUCCESS,
  MOVIE_POPULAR_FAIL,
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
} from './MovieConstants';

/*
 * Movie Popular (Initial List)
 */
const moviePopularInitialState = {
  loading: false,
  error: null,
  movies: [],
};

export const moviePopularReducer = (
  state = moviePopularInitialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case MOVIE_POPULAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_POPULAR_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        movies: uniqBy([...state.movies, ...payload.results], 'id'),
        page: payload.page,
        totalPages: payload.total_pages,
        totalResults: payload.total_results,
        hasMorePages: payload.page < payload.total_pages,
      };

    case MOVIE_POPULAR_FAIL:
      return {
        loading: false,
        error: ErrorImprovedMessage(payload),
      };
    default:
      return state;
  }
};

/*
 * Movie Search List
 */
const movieSearchInitialState = {
  loading: false,
  error: null,
  movies: [],
};

export const movieSearchReducer = (state = movieSearchInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MOVIE_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_SEARCH_SUCCESS:
      if (payload.keyword === state.keyword)
        return {
          error: null,
          loading: false,
          keyword: payload.keyword,
          movies: uniqBy([...state.movies, ...payload.results], 'id'),
          page: payload.page,
          totalPages: payload.total_pages,
          totalResults: payload.total_results,
          hasMorePages: payload.page < payload.total_pages,
        };
      return {
        error: null,
        loading: false,
        keyword: payload.keyword,
        movies: payload.results,
        page: 1,
        totalPages: payload.total_pages,
        totalResults: payload.total_results,
        hasMorePages: payload.page < payload.total_pages,
      };

    case MOVIE_SEARCH_FAIL:
      return {
        loading: false,
        error: ErrorImprovedMessage(payload),
      };
    default:
      return state;
  }
};

/*
 * Movie Details
 */
const movieDetailsInitialState = {
  loading: false,
  error: null,
  cachedDetails: {},
};

export const movieDetailsReducer = (
  state = movieDetailsInitialState,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_DETAILS_SUCCESS:
      return {
        loading: false,
        error: null,
        cachedDetails: {
          ...state.cachedDetails,
          [payload.id]: {
            id: payload.id,
            title: payload.title,
            tagline: payload.tagline,
            originalLanguage: payload.originalLanguage,
            originalTitle: payload.originalTitle,
            overview: payload.overview,
            popularity: payload.popularity,
            backdropPath: payload.backdropPath,
            posterPath: payload.posterPath,
            releaseDate: payload.releaseDate,
            genres: payload.genres,
            voteAverage: payload.voteAverage,
          },
        },
      };

    case MOVIE_DETAILS_FAIL:
      return {
        loading: false,
        error: ErrorImprovedMessage(payload),
      };
    default:
      return state;
  }
};

const ErrorImprovedMessage = (errorPayload) => {
  const errors = [errorPayload?.response?.data?.errors];
  const statusCode = errorPayload?.response?.data?.status_code;
  const statusMessage = errorPayload?.response?.data?.status_message;

  /*
   * TMDB have 3 error messages, one of them is just an "errors" array.
   * other two comes with status code.
   */
  const statusCodeMessage = {
    7: 'Chave de API inválida.',
    34: 'O recurso solicitado não pôde ser encontrado.',
  };
  return {
    devMessage: {
      errors,
      statusCode,
      statusMessage,
    },
    userMessage: errors
      ? 'Código: 422 - A consulta deve ser fornecida ou não é válida.'
      : `Código: ${statusCode} - ${statusCodeMessage[statusCode]}`,
  };
};
