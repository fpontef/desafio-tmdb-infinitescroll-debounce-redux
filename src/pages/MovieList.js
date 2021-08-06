import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies }, listFwRef) => {
  return (
    <div className='movielist'>
      {movies.map((movie, index) => {
        if (movies.length === index + 3)
          return (
            <MovieItem
              key={movie.id}
              ref={listFwRef}
              poster_path={movie.poster_path}
              title={movie.title}
              id={movie.id}
            />
          );
        return (
          <MovieItem
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            id={movie.id}
          />
        );
      })}
    </div>
  );
};

export default React.forwardRef(MovieList);
