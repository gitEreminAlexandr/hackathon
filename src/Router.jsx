import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';

import { Headers } from './containers';
import { WelcomPage } from './pages';

import './App.css';

export const Router = () => {
	const { Header } = Layout;

	return (
		<BrowserRouter>
			<Layout>
				<Header
					style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: 'white' }}
				>
					<Headers />
				</Header>

				<Layout style={{ backgroundColor: 'white', paddingTop: '38px' }}>
					<Routes>
						<Route path="/" element={<WelcomPage />} />
					</Routes>
				</Layout>
			</Layout>
		</BrowserRouter>
	);
};
