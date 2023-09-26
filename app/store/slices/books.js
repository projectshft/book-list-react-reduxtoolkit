import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
	name: 'books',
	initialState: {
		books: [
			{ title: 'Harry Potter and the Chamber of Secrets', pages: 357 },
			{ title: 'Hunger Games', pages: 387 },
			{ title: 'JavaScript: The Good Parts', pages: 176 },
			{ title: 'Clojure for the Brave and True', pages: 329 },
		],

		activeBook: null,
	},
	reducers: {
		setActiveBook: (state, action) => {
			state.activeBook = action.payload;
		},
	},
});

export const { setActiveBook } = booksSlice.actions;

export default booksSlice.reducer;
