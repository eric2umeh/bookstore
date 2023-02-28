import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import Button from './Button';

const Form = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id: v4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book's Title"
          id="title"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Author's Name"
          name="author"
          id="author"
          onChange={(event) => setAuthor(event.target.value)}
          value={author}
        />
        <Button type="submit">Add Book</Button>
      </form>
    </div>
  );
};

export default Form;
