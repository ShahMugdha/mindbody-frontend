import { combineReducers } from 'redux';

// ** Reducers Imports
import SaleReducer from './Sales';
import LocationReducer from './Locations'

const rootReducer = combineReducers({
  SaleReducer,
  LocationReducer
});

export default rootReducer;
