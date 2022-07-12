import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    const alert = document.getElementById('alert');
    e.preventDefault();
    if (e.target.title.value && e.target.author.value) {
      const book = {
        id: v4(),
        title: e.target.title.value,
        author: e.target.author.value,
        genre: 'Novel',
      };
      dispatch(addBook(book));
      e.target.title.value = '';
      e.target.author.value = '';
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
        <input name="title" id="title" type="text" placeholder="Book Title" />
        <input name="author" id="author" type="text" placeholder="Author" />
        <button type="submit" id="submit-book">Add Book</button>
        <div id="alert" />
      </form>
    </div>
  );
};

export default AddBook;
