import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

const Book = ({ id, author, title }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <Button type="submit" handleClick={handleRemove}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
