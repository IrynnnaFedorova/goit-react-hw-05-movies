import React from 'react';
import PropTypes from 'prop-types';
import c from './Genres.module.css';

const Genres = ({ genres }) => {
  return (
    <div className={c.genres}>
      <h3>Genres</h3>
      {genres &&
        genres.map(({ name, id }) => (
          <span className={c.genre} key={id}>
            {name}
          </span>
        ))}
    </div>
  );
};

Genres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default Genres;
