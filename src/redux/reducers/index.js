import { combineReducers } from 'redux';
import activityReducer from './Activity'




export default combineReducers({ activity: activityReducer });