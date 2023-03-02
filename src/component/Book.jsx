import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { booksActions, deleteBook } from '../redux/books/booksSlice';
import Button from './Button';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;

  const handleRemove = (e) => {
    // dispatch for remove book action

    // dataset removes single dashes (-) for when to capitalize the property's "camelCased" name.
    const { id } = e.target.dataset;
    dispatch(booksActions.removeBook(id));

    // Delete in the backend
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <Button type="submit" data-id={id} handleClick={handleRemove}>
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
