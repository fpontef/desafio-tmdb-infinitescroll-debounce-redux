import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieSearch } from '../store/MovieActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import MovieList from './MovieList';

const MovieSearchPage = ({ keyword }) => {
  const dispatch = useDispatch();

  const {
    loading,
    error,
    movies = [],
    page,
    keyword: movieSearchKeyword,
    hasMorePages,
  } = useSelector((state) => state.movieSearch);

  const [loadElementRef, nextPageNumber] = useInfiniteScroll({
    loading,
    page,
    hasMorePages,
  });

  const prevSearchKeyword = movieSearchKeyword;

  useEffect(() => {
    if (prevSearchKeyword === keyword) {
      dispatch(fetchMovieSearch({ page: nextPageNumber, keyword: keyword }));
    } else {
      dispatch(fetchMovieSearch({ page: 1, keyword: keyword }));
    }
    // Disabled because prevSearchKeyword should will trigger an update.
    // may need change aproach to useRef: https://reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often
    // eslint-disable-next-line
  }, [dispatch, nextPageNumber, keyword]);

  return (
    <div className='main'>
      {error ? (
        <Error error={error} />
      ) : movies.length ? (
        <MovieList movies={movies} ref={loadElementRef} />
      ) : (
        <div className='error__text'>Ops, não tem nada aqui.</div>
      )}
      {loading && <Loading />}
    </div>
  );
};

export default MovieSearchPage;
