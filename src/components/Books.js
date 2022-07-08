import React from 'react';
import AddBook from './AddBook';
import BookList from './BookList';

const Books = () => (
  <div className="booksWrapper">
    <BookList />
    <AddBook />
  </div>
);

export default Books;
