import PropTypes from 'prop-types';
import ActorsList from '../ActorsList';

const Cast = ({ actors }) => {
  return (
    <div>
      <ActorsList actors={actors} />
    </div>
  );
};

Cast.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      imgURL: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }),
  ),
};

export default Cast;
