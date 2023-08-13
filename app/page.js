import styles from './page.module.css';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

export default function Home() {
	return (
		<main className={styles.main}>
			<BookList />
			<BookDetail />
		</main>
	);
}
