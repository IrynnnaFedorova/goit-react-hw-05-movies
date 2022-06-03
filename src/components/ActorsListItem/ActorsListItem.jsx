import React from 'react';
import PropTypes from 'prop-types';

import c from './ActorsListItem.module.css';
import defaultImg from '../../images/placeholder.png';
import { BASE_URL_IMAGE } from '../../service/filmsAPI';

const ActorsListItem = ({ imgURL, name, character }) => {
  return (
    <>
      <div className={c.boxImage}>
        <img
          src={imgURL ? `${BASE_URL_IMAGE}${imgURL}` : defaultImg}
          alt="actor"
          className={c.img}
        />
      </div>
      <div>
        <h3 className={c.name}>{name}</h3>
        <p className={c.character}>Character: {character}</p>
      </div>
    </>
  );
};

ActorsListItem.defaultProps = {
  imgURL: defaultImg,
};

ActorsListItem.propTypes = {
  imgURL: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default ActorsListItem;
