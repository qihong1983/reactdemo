  import {
  	createStore,
  	applyMiddleware,
  	combineReducers
  } from 'redux';

  import {
  	list
  } from './userprofile/list';

  export const userprofile = combineReducers({
  	list
  });