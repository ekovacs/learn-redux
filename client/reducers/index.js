import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments'

const rootReducer = combineReducers({
  posts,
  comments, 
  routing: routerReducer
});


// console.log('type of created root reducer: ' + typeof rootReducer)

export default rootReducer;