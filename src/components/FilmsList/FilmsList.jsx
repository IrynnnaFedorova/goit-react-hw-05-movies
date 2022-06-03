import FilmsListItem from '../FilmsListItem';
import PropTypes from 'prop-types';
import c from './FilmsList.module.css';

const FilmsList = ({ films, location }) => {
  return (
    <ul className={c.filmsList}>
      {films.map(({ id, poster_path, title }) => (
        <li className={c.filmsListItem} key={id}>
          <FilmsListItem
            poster_path={poster_path}
            title={title}
            id={id}
            location={location}
          />
        </li>
      ))}
    </ul>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
  location: PropTypes.object,
};

export default FilmsList;
