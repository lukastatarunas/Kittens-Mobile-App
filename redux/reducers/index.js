import { combineReducers } from 'redux';
import kittens from './kittens';

const rootReducer = combineReducers({
  kittens,
});

export default rootReducer;
