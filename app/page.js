'use client';
import styles from './page.module.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { fetchPosts } from './store/slices/posts';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	const posts = useSelector((state) => state.posts.posts);

	const renderPosts = () => {
		if (posts.length > 0) {
			return posts.map((post) => {
				return (
					<li className='list-group-item' key={post._id}>
						<Link href={`/posts/${post._id}`}>{post.title}</Link>
					</li>
				);
			});
		} else {
			return <div>No posts to show</div>;
		}
	};

	return (
		<main className={styles.main}>
			<div>
				<div className='text-xs-right'>
					<Link className='btn btn-primary' href='/posts/new'>
						Add a Post
					</Link>
				</div>
				<br></br>
				<h3>Posts</h3>
				<ul className='list-group'>{renderPosts()}</ul>
			</div>
		</main>
	);
}
