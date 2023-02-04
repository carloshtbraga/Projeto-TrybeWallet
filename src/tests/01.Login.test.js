import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes Login', () => {
  it('Testa se existe um input para senha, uma para email e um botão e se o botão está desabilitado', () => {
    const { getByPlaceholderText, getByText } = renderWithRouterAndRedux(<App />);

    const pwInput = getByPlaceholderText('Password');
    const emailInput = getByPlaceholderText('Email');
    const loginButton = getByText('Entrar');

    expect(pwInput && emailInput && loginButton).toBeInTheDocument();
    expect(loginButton.disabled).toBe(true);
  });

  it('Testa se o botão libera ao colocar pelo menos 6 dígitos na senha e um pw com @ e .com e se ao clicar no botao vamos para a rota /carteira', () => {
    const { getByPlaceholderText, getByText,
      history } = renderWithRouterAndRedux(<App />);
    const pwInput = getByPlaceholderText('Password');
    const emailInput = getByPlaceholderText('Email');
    fireEvent.click(pwInput);
    userEvent.type(pwInput, '123456');
    fireEvent.click(emailInput);
    userEvent.type(emailInput, 'carlos@carlos.com');
    const loginButton = getByText('Entrar');
    expect(loginButton.disabled).toBe(false);
    userEvent.click(loginButton);
    expect(history.location.pathname).toBe('/carteira');
  });
});
