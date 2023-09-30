import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ROOT_URL = '/api';

// Async action using createAsyncThunk
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const response = await axios.get(`${ROOT_URL}/posts`);
	return response.data;
});

export const fetchPost = createAsyncThunk('posts/fetchPost', async (id) => {
	const response = await axios.get(`${ROOT_URL}/posts/${id}`);
	return response.data;
});

export const createPost = createAsyncThunk('posts/createPost', async (post) => {
	const response = await axios.post(`${ROOT_URL}/posts`, post);
	return response.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
	const response = await axios.delete(`${ROOT_URL}/posts/${id}`);
	return response.data;
});

export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		post: {},
		status: 'idle', // to track loading state
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.posts = action.payload;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
		builder
			.addCase(fetchPost.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchPost.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.post = action.payload;
			})
			.addCase(fetchPost.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
		builder
			.addCase(createPost.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(createPost.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.posts.push(action.payload);
			})
			.addCase(createPost.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default postsSlice.reducer;
