import { actionTypes } from '../actions/action-types';

const initialState = {
	error: '',
	loader: false,
	albumsData: [],
	albumsDetail: [],
};

export const albumsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.REC_DATA:
			return Object.assign({}, state, { albumsData: action.payload });
		case actionTypes.LOADING:
			return Object.assign({}, state, { loader: action.payload });
		case actionTypes.ERROR:
			return Object.assign({}, state, { error: action.payload });
		case actionTypes.REC_DETAILS:
			return Object.assign({}, state, { albumsDetail: action.payload });
		default:
			return state;
	}
};
