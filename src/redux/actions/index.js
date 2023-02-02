// Coloque aqui suas actions

// ACTIONS TYPES
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_CURRENCY = 'ADD_CURRENCY';

// ACTIONS CREATORS
export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

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
