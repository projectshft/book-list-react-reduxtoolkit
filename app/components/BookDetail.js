'use client';
import { useSelector } from 'react-redux';

const BookDetail = () => {
	const book = useSelector((state) => state.books.activeBook);

	if (!book) {
		return <div>Select a book to get started.</div>;
	}

	return (
		<div>
			<h3>Details for:</h3>
			<div>Title: {book.title}</div>
			<div>Pages: {book.pages}</div>
		</div>
	);
};

export default BookDetail;
