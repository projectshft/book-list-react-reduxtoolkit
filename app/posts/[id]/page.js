'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost, fetchPost } from '../../store/slices/posts';

const PostsShow = () => {
	const { id } = useParams();

	const router = useRouter();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPost(id));
	}, [dispatch, id]);

	const post = useSelector((state) => state.posts.post);

	const onDeleteClick = () => {
		dispatch(deletePost(id));
		router.push('/');
	};

	const renderCategories = () => {
		return post?.categories?.map?.((category) => {
			return (
				<span className='label label-primary' key={category}>
					{category}
				</span>
			);
		});
	};

	return (
		<div>
			<Link href='/'>Back To Index</Link>
			<br></br>
			<br></br>
			<button
				className='btn btn-danger pull-xs-right'
				onClick={onDeleteClick}
			>
				Delete Post
			</button>
			<br></br>
			<br></br>
			<h3>{post?.title}</h3>
			<h6>
				<strong>Categories:</strong> {renderCategories()}
			</h6>
			<p>{post?.content}</p>
		</div>
	);
};

export default PostsShow;
