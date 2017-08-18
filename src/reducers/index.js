import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook  from './reducer_active_book';

// Each reducer is responsible for the creation and management of a little
// piece of the global state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
