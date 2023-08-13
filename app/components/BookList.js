'use client';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveBook } from '../store/slices/books';

const BookList = () => {
	const books = useSelector((state) => state.books.books);
	const dispatch = useDispatch();

	return (
		<ul className='list-group col-sm-4'>
			{books.map((book) => {
				return (
					<li
						key={book.title}
						onClick={() => dispatch(setActiveBook(book))}
						className='list-group-item'
					>
						{book.title}
					</li>
				);
			})}
		</ul>
	);
};

export default BookList;
