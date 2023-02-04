import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('Testes Login', () => {
  it('Testa se exibe um header com o seu email e se existem na tela 5 inputs e 1 botao e se ao preencher e clicar no botao aparecer uma tabela com a despesa e 2 botoes', async () => {
    const { getByTestId, getByText,
      getAllByRole } = renderWithRouterAndRedux(<Wallet />);

    const value = getByTestId('value-input');
    const description = getByTestId('description-input');
    const currency = getByTestId('currency-input');
    const method = getByTestId('method-input');
    const tag = getByTestId('tag-input');
    const addExpenseButton = getByText('Adicionar despesa');

    expect(value && description && currency
        && method && tag && addExpenseButton).toBeInTheDocument();

    userEvent.click(currency);
    userEvent.click(method);
    userEvent.click(tag);
    userEvent.click(value);
    userEvent.type(value, '15');
    userEvent.click(description);
    userEvent.type(description, 'Chocolate');
    userEvent.click(addExpenseButton);

    await waitFor(() => {
      const chocolate = getByText('Chocolate');
      expect(chocolate).toBeInTheDocument();
      const threebuttons = getAllByRole('button');
      expect(threebuttons.length).toBe(3);
      const excluir = getByText('Excluir');
      userEvent.click(excluir);
      waitFor(() => {
        expect(threebuttons.length).toBe(1);
      });
    });
  });
});
