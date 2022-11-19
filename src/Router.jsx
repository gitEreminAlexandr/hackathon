import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Counter } from './pages';
import './App.css';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Counter />} />
			</Routes>
		</BrowserRouter>
	);
};
