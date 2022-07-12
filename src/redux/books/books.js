const ADD = 'bookstore/books/ADD';
const UPDATE = 'bookstore/books/UPDATE';
const REMOVE = 'bookstore/books/REMOVE';

const addBook = (book) => ({
  type: ADD,
  book,
});

const updateBook = (book) => ({
  type: UPDATE,
  book,
});

const removeBook = (book) => ({
  type: REMOVE,
  book,
});

const bookReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.book,
      ];
    case UPDATE:
      return state.map((book) => {
        if (book.id === action.book.id) {
          return action.book;
        }
        return book;
      });
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export { addBook, updateBook, removeBook };
export default bookReducer;
