import { ADD_CURRENCY, ADD_DESPESA, FETCH_CAMBIO } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCY:
    return {
      ...state,
      currencies: action.moedas,
    };
  case ADD_DESPESA:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case FETCH_CAMBIO:
    return {
      ...state,
      expenses: [...state.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
