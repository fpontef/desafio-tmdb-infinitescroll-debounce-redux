import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoviePopular } from '../store/MovieActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import MovieList from './MovieList';

const MoviePopularPage = () => {
  const dispatch = useDispatch();

  const { loading, error, movies, page, hasMorePages } = useSelector(
    (state) => state.moviePopular
  );

  const [loadElementRef, nextPageNumber] = useInfiniteScroll({
    loading,
    page,
    hasMorePages,
  });

  useEffect(() => {
    dispatch(fetchMoviePopular({ page: nextPageNumber }));
  }, [dispatch, nextPageNumber]);

  return (
    <>
      {loading && <Loading />}
      {error ? (
        <Error error={error} />
      ) : movies.length ? (
        <MovieList movies={movies} ref={loadElementRef} />
      ) : (
        <div className='error__text'>Ops, não tem nada aqui.</div>
      )}
    </>
  );
};

export default MoviePopularPage;
