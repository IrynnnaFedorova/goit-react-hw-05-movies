import React from 'react';
import PropTypes from 'prop-types';

import c from './ReviewsListItem.module.css';

const ReviewsListItem = ({ author, content }) => {
  return (
    <>
      <h3 className={c.author}>Author: {author}</h3>
      <p>{content}</p>
    </>
  );
};

ReviewsListItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewsListItem;
