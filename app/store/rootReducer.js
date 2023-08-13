import { combineReducers } from 'redux';
import booksReducer from './slices/books';

const rootReducer = combineReducers({
	books: booksReducer,
});

export default rootReducer;
