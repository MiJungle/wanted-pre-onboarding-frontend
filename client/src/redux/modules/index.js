import { combineReducers } from 'redux';
import base from './base';
import auth from './auth';
import user from './user';
import answer from './answer';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    base,
    auth,
    user,
    answer,
    pender: penderReducer
});