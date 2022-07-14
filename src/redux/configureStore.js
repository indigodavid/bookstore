import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';
import { asyncGetState } from './books/booksAsyncActions';

const preloadedState = {
  books: [],
  categories: [],
};

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.dispatch(asyncGetState());

export default store;
