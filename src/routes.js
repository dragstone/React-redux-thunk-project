import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Albums from './components/albums/albums';
import AlbumsDetail from './components/albums/albums-detail';
const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Albums />}></Route>
				<Route exact path='/:id' element={<AlbumsDetail />}></Route>
			</Routes>
		</Router>
	);
};

export default AppRoutes;
