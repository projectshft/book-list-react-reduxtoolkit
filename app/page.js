'use client';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: (state) => state + 1,
		decrement: (state) => state - 1,
		reset: () => 0,
	},
});

const store = configureStore({
	reducer: counterSlice.reducer,
});

export default function Home() {
	const [count, setCount] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setCount(store.getState());
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const handleIncrement = () => {
		store.dispatch(counterSlice.actions.increment());
	};

	const handleDecrement = () => {
		store.dispatch(counterSlice.actions.decrement());
	};

	return (
		<main className={styles.main}>
			<button onClick={handleDecrement}>-</button>
			<h1>{count}</h1>
			<button onClick={handleIncrement}>+</button>
		</main>
	);
}
