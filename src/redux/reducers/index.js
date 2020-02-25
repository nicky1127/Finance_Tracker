import { combineReducers } from 'redux';
import recordReucer from './recordReucer';

const rootReducer = combineReducers({ records:recordReucer });

export default rootReducer;
