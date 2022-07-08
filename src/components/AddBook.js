import React from 'react';

const AddBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="addBook">
      <form id="add-book" onSubmit={handleSubmit}>
        <input name="title" id="title" type="text" placeholder="Book Title" />
        <input name="author" id="author" type="text" placeholder="Author" />
        <button type="submit" id="submit-book">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
