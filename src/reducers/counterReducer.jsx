import defaultCartValues from './defaultCart';
import * as ACTIONS from './../actions/types';

const increment = (state, changedStated) => {
    return state.map(c => {
        c.value = c.id === changedStated.id ? c.value+1: c.value;
        c.amount = c.id === changedStated.id ? c.value * c.rate : c.amount
        return c;
    });
};

const decrement = (state, changedStated) => {
    return state.map(c => {
        if(c.id === changedStated.id && c.value > 0){
            c.value = c.value-1;
            c.amount = c.amount - c.rate;
        }
        return c;    
    });
};

const deleteHandle = (state, changedStated) => {
    return state.filter(c => c.id !== changedStated.id);
};

const resetBtn = (state, changedStated) => {
    return state.map(c => {
        c.value = c.id === changedStated.id ? 0 : c.value;
        return c;
    });
};

const  initialState = defaultCartValues();

export default (state=initialState, action) =>{
    switch(action.type){
        case ACTIONS.INCREMENT: 
            state = increment(state, action.payload);
        break;
        case ACTIONS.DECREMENT: 
            state = decrement(state, action.payload);
        break;
        case ACTIONS.DELETE: 
            state = deleteHandle(state, action.payload);
        break;
        case ACTIONS.RESET: 
            state = resetBtn(state, action.payload);
        break;
        default : 
    }

    return state;
};