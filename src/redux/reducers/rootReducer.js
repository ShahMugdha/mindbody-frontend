import { combineReducers } from 'redux';

// ** Reducers Imports
import SaleReducer from './Sales';
import LocationReducer from './Locations';
import StaffReducer from './Staff';

const rootReducer = combineReducers({
  SaleReducer,
  LocationReducer,
  StaffReducer
});

export default rootReducer;
