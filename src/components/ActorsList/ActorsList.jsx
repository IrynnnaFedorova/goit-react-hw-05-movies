import React from 'react';
import PropTypes from 'prop-types';
import ActorsListItem from '../ActorsListItem';
import c from './ActorsList.module.css';

const ActorsList = ({ actors }) => {
  return (
    <ul className={c.actorList}>
      {actors &&
        actors.map(({ character, name, profile_path, id }) => (
          <li key={id} className={c.actorListItem}>
            <ActorsListItem
              imgURL={profile_path}
              name={name}
              character={character}
            />
          </li>
        ))}
    </ul>
  );
};

ActorsList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      imgURL: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }),
  ),
};

export default ActorsList;
