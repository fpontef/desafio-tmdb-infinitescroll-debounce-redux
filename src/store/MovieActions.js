import api from '../services/api';
import {
  MOVIE_DETAILS_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_POPULAR_REQUEST,
  MOVIE_POPULAR_SUCCESS,
  MOVIE_POPULAR_FAIL,
  MOVIE_SEARCH_FAIL,
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
} from './MovieConstants';

export const fetchMoviePopular = ({ page = 1, language = 'pt-BR' }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: MOVIE_POPULAR_REQUEST });

      const { data } = await api.get(
        `/movie/popular?page=${page}&language=${language}`
      );

      dispatch({
        type: MOVIE_POPULAR_SUCCESS,
        payload: {
          page: data.page,
          results: data.results,
          total_pages: data.total_pages,
        },
      });
    } catch (err) {
      dispatch({
        type: MOVIE_POPULAR_FAIL,
        payload: err,
      });
    }
  };
};

export const fetchMovieSearch = ({
  page = 1,
  keyword = '',
  language = 'pt-BR',
}) => {
  return async (dispatch) => {
    try {
      dispatch({ type: MOVIE_SEARCH_REQUEST });

      const { data } = await api.get(
        `/search/movie?query=${keyword}&page=${page}&language=${language}`
      );

      dispatch({
        type: MOVIE_SEARCH_SUCCESS,
        payload: {
          keyword: keyword,
          page: data.page,
          results: data.results,
          total_pages: data.total_pages,
        },
      });
    } catch (err) {
      dispatch({
        type: MOVIE_SEARCH_FAIL,
        payload: err,
      });
    }
  };
};

export const fetchMovieDetails = ({ movieId, language = 'pt-BR' }) => {
  return async (dispatch, getState) => {
    // Check data already exists
    // visto aqui: https://redux.js.org/usage/reducing-boilerplate
    const {
      movieDetails: { cachedDetails },
    } = getState();

    if (!cachedDetails[movieId])
      // this checks if has already a state.movieDetails[movieId]
      // if is cached data, return (doing nothing)
      try {
        dispatch({ type: MOVIE_DETAILS_REQUEST });

        const { data } = await api.get(
          `/movie/${movieId}?language=${language}`
        );

        // dispatch({ type: MOVIE_DETAILS_SUCCESS, payload: data });
        dispatch({
          type: MOVIE_DETAILS_SUCCESS,
          payload: {
            id: data.id,
            title: data.title,
            tagline: data.tagline,
            originalLanguage: data.original_language,
            originalTitle: data.original_title,
            overview: data.overview,
            popularity: data.popularity,
            backdropPath: data.backdrop_path,
            posterPath: data.poster_path,
            releaseDate: data.release_date,
            genres: data.genres,
            voteAverage: data.vote_average,
          },
        });
      } catch (err) {
        dispatch({ type: MOVIE_DETAILS_FAIL, payload: err });
      }
  };
};
