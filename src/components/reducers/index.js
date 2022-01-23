import { albumsReducer } from './albums';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
	albumsReducer,
});

export default rootReducers;
