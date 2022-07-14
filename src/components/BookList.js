import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { asyncRemoveBook } from '../redux/books/booksAsyncActions';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleRemove = (book) => {
    dispatch(asyncRemoveBook(book)).then((response) => {
      const alert = document.getElementById('alert');
      alert.innerHTML = response.payload;
      setTimeout(() => {
        alert.innerHTML = '';
      }, 3000);
    });
  };

  return (
    <ul className="bookList">
      {books.map((book) => (
        <li key={book.item_id}>
          <div className="bookWrapper">
            <div className="category">{book.category}</div>
            <Book title={book.title} author={book.author} />
            <div className="bookActions">
              <button className="comments" type="button">Comments</button>
              <button className="remove" type="button" onClick={() => handleRemove(book)}>Remove</button>
              <button className="edit" type="button">Edit</button>
            </div>
          </div>
          <div className="progress">Progress Icon</div>
          <div className="updateProgress">
            <div className="label">Current Chapter</div>
            <div className="chapter">Chapter 1</div>
            <button type="button">Update Progress</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
