import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { asyncAddBook } from '../redux/books/booksAsyncActions';

const AddBook = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    const alert = document.getElementById('alert');
    e.preventDefault();
    if (e.target.title.value && e.target.author.value) {
      const book = {
        item_id: v4(),
        title: e.target.title.value,
        author: e.target.author.value,
        category: 'Fiction',
      };
      dispatch(asyncAddBook(book)).then((response) => {
        e.target.title.value = '';
        e.target.author.value = '';
        alert.innerHTML = response.payload;
        setTimeout(() => {
          alert.innerHTML = '';
        }, 3000);
      });
    } else {
      alert.innerHTML = 'Please fill Book Title and Author.';
      setTimeout(() => {
        alert.innerHTML = '';
      }, 3000);
    }
  };

  return (
    <div className="addBook">
      <form id="add-book" onSubmit={handleSubmit}>
        <input name="title" id="title-input" type="text" placeholder="Book Title" />
        <input name="author" id="author-input" type="text" placeholder="Author" />
        <button type="submit" id="submit-book">Add Book</button>
        <div id="alert" />
      </form>
    </div>
  );
};

export default AddBook;
