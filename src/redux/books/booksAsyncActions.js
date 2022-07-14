import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBookToAPI, removeBookFromAPI, getStateFromAPI } from '../../utils/apiActions';
import { addBook, removeBook } from './books';
import { ASYNC_ADD, ASYNC_REMOVE, GET } from './actions';

const asyncAddBook = createAsyncThunk(
  ASYNC_ADD,
  async (book, { dispatch }) => {
    const response = await addBookToAPI(book);
    dispatch(addBook(book));
    return response;
  },
);

const asyncRemoveBook = createAsyncThunk(
  ASYNC_REMOVE,
  async (book, { dispatch }) => {
    const response = await removeBookFromAPI(book);
    dispatch(removeBook(book));
    return response;
  },
);

const asyncGetState = createAsyncThunk(
  GET,
  async () => {
    const response = await getStateFromAPI();
    return response.books;
  },
);

export { asyncAddBook, asyncGetState, asyncRemoveBook };
