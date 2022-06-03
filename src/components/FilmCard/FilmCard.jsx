import React from 'react';
import PropTypes from 'prop-types';
import Genres from '../Genres/Genres';
import c from './FilmCard.module.css';
import { updateDate } from '../../service/updateDate';
import { BASE_URL_IMAGE } from '../../service/filmsAPI';

const FilmCard = ({
  poster_path,
  title,
  overview,
  genres,
  vote_average,
  tagline,
  release_date,
}) => {
  return (
    <article className={c.filmCard}>
      <div className={c.imgFilm}>
        <img src={BASE_URL_IMAGE + poster_path} alt={tagline} />
      </div>
      <div>
        <h2 className={c.title}>
          {title} ({release_date && updateDate(release_date)})
        </h2>
        <p>User score: {vote_average * 10}%</p>
        <h3 className={c.overview}>Overview</h3>
        <p>{overview}</p>
        <Genres genres={genres} />
      </div>
    </article>
  );
};

FilmCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
  vote_average: PropTypes.number.isRequired,
  tagline: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default FilmCard;
