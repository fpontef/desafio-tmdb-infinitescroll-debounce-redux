import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { fetchMovieDetails } from '../store/MovieActions';

const MovieDetails = () => {
  const history = useHistory();
  const { id: movieId } = useParams();

  const { loading, error, cachedDetails } = useSelector(
    (state) => state.movieDetails
  );

  const movieDetails = cachedDetails[movieId];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieDetails({ movieId }));
  }, [dispatch, movieId]);

  return (
    <>
      <button type='button' onClick={() => history.goBack()}>
        {'<< '} Voltar...
      </button>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        movieDetails && (
          <div
            className='moviedetails'
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdropPath}) `,
            }}
          >
            <div className='moviedetails__cover'>
              <div className='moviedetails__header'>
                {movieDetails.posterPath !== null ? (
                  <img
                    className='moviedetails__img'
                    src={`https://image.tmdb.org/t/p/w300/${movieDetails.posterPath}`}
                    alt={`Poster do Filme ${movieDetails.title}`}
                  />
                ) : (
                  <div
                    className='moviedetails__img img-placeholder '
                    alt={movieDetails.title}
                  >
                    {movieDetails.title}
                  </div>
                )}
                <div className='moviedetails__items'>
                  <h1 className='moviedetails__title'>{movieDetails.title}</h1>
                  <h4 className='moviedetails__text'>
                    {movieDetails.releaseDate.split('-')[0]}
                  </h4>
                  {movieDetails.tagline && (
                    <h4 className='moviedetails__tagline'>
                      {movieDetails.tagline}
                    </h4>
                  )}
                  <div className='moviedetails__genre'>
                    {movieDetails.genres.map((i) => (
                      <span key={i.id}>{i.name}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className='moviedetails__text'>{movieDetails.overview}</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

// `title`, `description`, `rating`, `etc`.
export default MovieDetails;
