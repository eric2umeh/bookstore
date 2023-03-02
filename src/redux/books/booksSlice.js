import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../../url';

export const postBook = createAsyncThunk('books/postBook', async (bookData, thunkAPI) => {
  try {
    const res = await axios.post(`${URL}/books`, bookData);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.data?.message || 'An error occured while posting data');
  }
});

export const getBooks = createAsyncThunk('books/getBooks', async (_, thunkAPI) => {
  try {
    const res = await axios(`${URL}/books`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error?.data?.message || 'An error occured while getting data',
    );
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id, thunkAPI) => {
  try {
    const res = await axios.delete(`${URL}/books/${id}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error?.data?.message || 'Error occured deleting data',
    );
  }
});

const initialState = {
  isLoading: false,
  books: [],
};

const booksSlice = createSlice({ name: 'books', initialState, reducers: {
  addBook: (state, actions) => {
    const bookData = actions.payload;
    state.books.push(bookData);
  },

  removeBook: (state, actions) => {
    const idOfBookToRemove = actions.payload;
    state.books = state.books.filter((book) => book.item_id !== idOfBookToRemove);
  },
},
extraReducers: (builder) => {
  // Post a Book
  builder
    .addCase(postBook.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(postBook.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(postBook.rejected, (state) => {
      state.isLoading = false;
    });

    // Get Books
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const resObject = action.payload;

        const newBooksArr = [];
        for (const id in resObject) {
          const bookObj = resObject[id][0];
          bookObj.item_id = id;
          newBooksArr.push(bookObj);
        }

        state.books = newBooksArr;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
