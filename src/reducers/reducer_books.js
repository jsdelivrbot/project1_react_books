import _ from 'lodash';
import { FETCH_BOOKS } from '../actions';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_BOOKS:
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}