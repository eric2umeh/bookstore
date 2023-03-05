import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../component/Book';
import Form from '../component/Form';
import { getBooks } from '../redux/books/booksSlice';

const Books = () => {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let output;
  if (isLoading) output = <h4>Loading...</h4>;

  if (books?.length > 0) {
    output = books.map((indexx) => (
      <Book
        key={indexx.item_id}
        id={indexx.item_id}
        title={indexx.title}
        author={indexx.author}
        category={indexx.category}
      />
    ));
  }

  if (!isLoading && books?.length === 0) {
    output = <h4>No books available, Please add book</h4>;
  }

  return (
    <>
      <div className="row">
        <ul className="books-list">{output}</ul>
      </div>
      <Form />
    </>
  );
};

export default Books;
