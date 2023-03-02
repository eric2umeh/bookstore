import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { booksActions, deleteBook } from '../redux/books/booksSlice';
import Button from './Button';
import ProgressBar from './ProgressBar';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title, author, id, category,
  } = props;

  const handleRemove = (e) => {
    // dispatch for remove book action.
    // dataset removes single dashes (-) for when to capitalize the property's "camelCased" name.
    const { id } = e.target.dataset;
    dispatch(booksActions.removeBook(id));

    // Delete in the backend
    dispatch(deleteBook(id));
  };

  // Progress Bar
  const [randomPercentage] = useState(Math.floor(Math.random() * 90 + 10));

  return (
    <div className="book-container">
      <div className="book-details">
        <span className="category-chip">{category}</span>
        <h2 className="title">{title}</h2>
        <span className="by">{author}</span>
        <div className="buttons-wrapper">
          <Button type="button" data-id={id} onClick={handleRemove}>
            Remove
          </Button>
          <Button type="button" data-id={id}>
            Edit
          </Button>
        </div>
      </div>
      <div className="main-circle">
        <ProgressBar percentage={randomPercentage} />
        <div>
          <h2>
            {randomPercentage}
            <span>%</span>
          </h2>
          <p>Completed</p>
        </div>
      </div>
      <div className="chapter">
        <span className="title">Current Chapter</span>
        <h4 className="chapter-text">Chapter 17</h4>
        <Button type="button" className="progress-btn">
          Update progress
        </Button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
