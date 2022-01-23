import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions/albums';
import { useNavigate } from 'react-router-dom';

const Albums = () => {
	const albums = useSelector((state) => state.albumsReducer);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(fetchData());
	}, []);

	const { loader, error, albumsData } = albums;
	console.log(albums);
	return loader ? (
		<h1>loading......</h1>
	) : error ? (
		<p>{error}</p>
	) : (
		<div>
			{albumsData.map((item) => {
				return (
					<p onClick={() => navigate(`/${item.id}`)}>{item.title}</p>
				);
			})}
		</div>
	);
};

export default Albums;
