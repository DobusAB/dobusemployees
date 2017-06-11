import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Role from './Services/Roles/reducer';

export const Store = createStore(
	combineReducers({
		role: Role
	}),
 	applyMiddleware (
 		thunkMiddleware
 	)
);