import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ poster_path, title, id }, itemFwRef) => {
  return (
    <div className='movielist__item' ref={itemFwRef}>
      <Link to={`/detail/${id}`}>
        {/* <Link to={`${process.env.PUBLIC_URL}/detail/${id}`}> */}
        {poster_path !== null ? (
          <img
            className='movielist__poster'
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
            alt={title}
          />
        ) : (
          <div className='img-placeholder movielist__poster' alt={title}>
            {title}
          </div>
        )}
      </Link>
    </div>
  );
};

export default forwardRef(MovieItem);
