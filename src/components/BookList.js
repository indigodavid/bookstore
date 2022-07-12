import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleRemove = (book) => {
    dispatch(removeBook(book));
  };
  return (
    <ul className="bookList">
      {books.map((book) => (
        <li key={book.id}>
          <div className="bookWrapper">
            <div className="genre">{book.genre}</div>
            <Book title={book.title} author={book.author} />
            <div className="bookActions">
              <button className="comments" type="button" id={`comments-${book.id}`}>Comments</button>
              <button className="remove" type="button" id={`remove-${book.id}`} onClick={() => handleRemove(book)}>Remove</button>
              <button className="edit" type="button" id={`edit-${book.id}`}>Edit</button>
            </div>
          </div>
          <div className="progress">Progress Icon</div>
          <div className="updateProgress">
            <div>Current Chapter</div>
            <div>Chapter 1</div>
            <button type="button">Update Progress</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
