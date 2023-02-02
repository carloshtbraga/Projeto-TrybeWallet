import { ADD_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCY:
    return {
      ...state,
      currencies: action.moedas,
    };
  default:
    return state;
  }
};

export default wallet;
