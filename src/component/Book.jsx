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
    // dispatch for remove book action
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
        <p className="by">{author}</p>
        <div className="buttons-wrapper">
          <Button type="submit" dataId={id} handleClick={handleRemove}>
            Remove
          </Button>
          <Button type="button" data-id={id}>
            <span className="line">Edit</span>
          </Button>
        </div>
      </div>
      <div className="completion-status">
        <div><ProgressBar percentage={randomPercentage} /></div>
        <div className="completion-data">
          <span className="percentage">64%</span>
          <span className="status">Completed</span>
        </div>
      </div>
      <div className="chapter">
        <span className="title">Current Chapter</span>
        <h4 className="chapter-text">Chapter 17</h4>
        <button type="button" className="progress-btn">
          Update progress
        </button>
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
