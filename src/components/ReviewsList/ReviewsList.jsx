import React from 'react';
import PropTypes from 'prop-types';
import ReviewsListItem from '../ReviewsListItem';
import c from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={c.item}>
          <ReviewsListItem author={author} content={content} />
        </li>
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

export default ReviewsList;
