import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from '../../routes';
import c from './FilmsListItem.module.css';
import { BASE_URL_IMAGE } from '../../service/filmsAPI';

const FilmsListItem = ({ poster_path, title, id, location }) => {
  return (
    <>
      <Link
        className={c.title}
        to={{
          pathname: `${routes.MOVIES_PAGE}/${id}`,
          state: { from: location },
        }}
      >
        <div className={c.boxImage}>
          <img src={BASE_URL_IMAGE + poster_path} alt="" className={c.img} />
        </div>
        {title}
      </Link>
    </>
  );
};

FilmsListItem.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.object,
};

export default FilmsListItem;
