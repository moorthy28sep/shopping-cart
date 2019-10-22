import * as ACTIONS from './../actions/types';

export const increment = (id) => {
  return {
      type: ACTIONS.INCREMENT,
      payload: id
  };
};

export const decrement = (id) => {
  return {
      type: ACTIONS.DECREMENT,
      payload: id
  };
};

export const deleteHandle = (id) => {
  return {
      type: ACTIONS.DELETE,
      payload: id
  };
}

export const reset = (id) => {
  return {
      type: ACTIONS.RESET,
      payload: id
  };
}