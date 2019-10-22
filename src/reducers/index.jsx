import {combineReducers} from 'redux';
import countRed from './counterReducer';
import paymentsReducer from './paymentsReducer';
//import defaultCart from './defaultCart';

const allReducers = combineReducers({
    counters : countRed,
    payments: paymentsReducer
   // counters: countRed
});

export default allReducers;