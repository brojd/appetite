import { combineReducers } from 'redux';
import mealsReducer from './meals';

const store = combineReducers({
  meals: mealsReducer,
});

export default store;
