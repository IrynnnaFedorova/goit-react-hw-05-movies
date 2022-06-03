import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from '../ReviewsList';

const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>We don't have any reviews for this movie!</p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

export default Reviews;
