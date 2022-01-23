import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetailOnId } from '../actions/albums';
import { useParams } from 'react-router-dom';

const AlbumsDetail = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const albums = useSelector((state) => state.albumsReducer);
	useEffect(() => {
		console.log(params.id);
		dispatch(fetchDetailOnId(params.id));
	}, []);

	const { error, loader, albumsDetail } = albums;
	return loader ? (
		<h1>loading......</h1>
	) : error ? (
		<p>{error}</p>
	) : (
		<div>
			{albumsDetail.map((item) => {
				return <p>{item.title}</p>;
			})}
		</div>
	);
};

export default AlbumsDetail;
