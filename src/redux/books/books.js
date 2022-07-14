import {
  ADD, UPDATE, REMOVE, GET,
} from './actions';

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
      if (state.find((elem) => elem.item_id === action.book.item_id)) {
        return state;
      }
      return [
        ...state,
        action.book,
      ];
    case UPDATE:
      return state.map((book) => {
        if (book.item_id === action.book.item_id) {
          return action.book;
        }
        return book;
      });
    case REMOVE:
      return state.filter((book) => book.item_id !== action.book.item_id);
    case `${GET}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export {
  addBook, updateBook, removeBook,
};
export default bookReducer;
