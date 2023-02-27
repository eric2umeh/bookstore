import { v4 } from 'uuid';

const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'book/REMOVE_BOOK';

// Actions
const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

// Reducer
const booksReducer = (
  state = [
    {
      id: v4(),
      title: 'Oliver Twist',
      author: 'Charles Dikens',
      genre: 'sc-fi',
    },
    {
      id: v4(),
      title: 'The World as Will and Representation',
      author: 'Arthur Schopenhauer',
      genre: 'philosophy',
    },
    {
      id: v4(),
      title: 'Thus Spoke Zarathustra',
      author: 'Friedrich Nietzsche',
      genre: 'philosophy',
    },
    {
      id: v4(),
      title: 'Les Misérables',
      author: 'Victor Hugo',
      genre: 'historical fiction',
    },
  ],
  action = {},
) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.id)];
    default:
      return state;
  }
};

export { addBook, removeBook };

export default booksReducer;
