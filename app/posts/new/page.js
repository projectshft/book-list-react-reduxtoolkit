'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { createPost } from '../../store/slices/posts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const PostsNew = () => {
	const schema = yup
		.object({
			title: yup.string().required().max(10),
			categories: yup
				.array()
				.transform(function (value) {
					return value.split(' ');
				})
				.required()
				.min(1)
				.max(5),
			content: yup.string().required().min(120),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const dispatch = useDispatch();
	const router = useRouter();
	const [title, setTitle] = useState('');
	const [categories, setCategories] = useState('');
	const [content, setContent] = useState('');

	const handleFormSubmit = (data) => {
		dispatch(createPost({ id: Math.round(Math.random() * 100), ...data }));
		router.push('/');
	};

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<div className='form-group'>
				<label>Title for Post</label>
				<input
					{...register('title', { required: true })}
					className='form-control'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				></input>
				{errors.title?.message && (
					<div className='alert alert-danger'>
						{errors.title?.message}
					</div>
				)}
			</div>

			<div className='form-group'>
				<label>Categories</label>
				<input
					{...register('categories', { required: true })}
					className='form-control'
					value={categories}
					onChange={(e) => setCategories(e.target.value)}
				></input>
				{errors.categories?.message && (
					<div className='alert alert-danger'>
						{errors.categories?.message}
					</div>
				)}
			</div>

			<div className='form-group'>
				<label>Post Content</label>
				<textarea
					{...register('content', { required: true })}
					type='text-area'
					className='form-control'
					value={content}
					onChange={(e) => setContent(e.target.value)}
				></textarea>
				{errors.content?.message && (
					<div className='alert alert-danger'>
						{errors.content?.message}
					</div>
				)}
			</div>

			<button className='btn btn-primary' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default PostsNew;
