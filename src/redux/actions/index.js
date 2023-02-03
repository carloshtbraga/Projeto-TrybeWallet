// ACTIONS TYPES
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ADD_DESPESA = 'ADD_DESPESA';
export const FETCH_CAMBIO = 'FETCH_CAMBIO';

// ACTIONS CREATORS
export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

// ------------------------------------------------------------------------------------------

export const requestCurrency = (moedas) => ({
  type: ADD_CURRENCY,
  moedas,
});

export const addCurrency = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const workedData = Object.keys(data);
    const filteredData = workedData.filter((item, index) => index !== 1);
    dispatch(requestCurrency(filteredData));
  } catch (error) {
    console.log('Errei =)');
  }
};

// ------------------------------------------------------------------------------------------

export const addDespesa = (expenses) => ({
  type: ADD_DESPESA,
  expenses,
});

export const addExchangeRate = (pstate) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    const newState = { ...pstate, exchangeRates: data };
    dispatch(addDespesa(newState));
  } catch (error) {
    console.log('Errei kkkkkkkkk');
  }
};
