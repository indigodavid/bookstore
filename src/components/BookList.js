import React from 'react';
import Book from './Book';

const BookList = () => {
  const dummyData = [
    {
      id: 1,
      title: 'El Ingenioso Hidalgo Don Quijote de La Mancha',
      author: 'Miguel de Cervantes',
      genre: 'Novel',
    },
    {
      id: 2,
      title: 'The Call of Cthulhu',
      author: 'Howard Philips Lovecraft',
      genre: 'Horror',
    },
    {
      id: 3,
      title: 'The Illiad',
      author: 'Homer',
      genre: 'Epic Poetry',
    },
  ];

  return (
    <ul className="bookList">
      {dummyData.map((book) => (
        <li key={book.id}>
          <div className="bookWrapper">
            <div className="genre">{book.genre}</div>
            <Book title={book.title} author={book.author} />
            <div className="bookActions">
              <button className="comments" type="button" id={`comments-${book.id}`}>Comments</button>
              <button className="remove" type="button" id={`remove-${book.id}`}>Remove</button>
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
