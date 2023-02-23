import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div>
    <ul>
      <li>{title}</li>
      <li>{author}</li>
    </ul>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
