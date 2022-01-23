import { actionTypes } from './action-types';
import axios from 'axios';

export const recieveData = (data) => {
	return {
		type: actionTypes.REC_DATA,
		payload: data,
	};
};

export const loading = (value) => {
	return {
		type: actionTypes.LOADING,
		payload: value,
	};
};

export const errorFun = (err) => {
	return {
		type: actionTypes.ERROR,
		payload: err,
	};
};

export const recieveDetails = (data) => {
	return {
		type: actionTypes.REC_DETAILS,
		payload: data,
	};
};

export const fetchData = () => {
	return (dispatch) => {
		dispatch(loading(true));
		axios
			.get('https://jsonplaceholder.typicode.com/albums')
			.then((response) => {
				dispatch(loading(false));
				dispatch(recieveData(response.data));
			})
			.catch((err) => {
				dispatch(loading(false));
				dispatch(errorFun(err.message));
			});
	};
};

export const fetchDetailOnId = (id) => {
	return (dispatch) => {
		dispatch(loading(true));
		axios
			.get('https://jsonplaceholder.typicode.com/photos')
			.then((response) => {
				dispatch(loading(false));

				dispatch(recieveDetails(response.data));
			})
			.catch((err) => {
				dispatch(loading(false));
				dispatch(errorFun(err.message));
			});
	};
};
