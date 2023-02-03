import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../redux/actions';

class Table extends Component {
  removeClick = (id) => {
    const { dispatch } = this.props;
    dispatch(removeExpense(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              expenses.map(({ description, tag, method,
                value, currency, id, exchangeRates }) => {
                const currencyFromExchangeRates = exchangeRates[currency];
                const askPrice = currencyFromExchangeRates.ask;
                const currencyName = currencyFromExchangeRates.name;
                const convertedPrice = askPrice * value;

                return (
                  <tr key={ id }>
                    <td>{description}</td>
                    <td>{tag}</td>
                    <td>{method}</td>
                    <td>{Number(value).toFixed(2)}</td>
                    <td>{currencyName}</td>
                    <td>{Number(askPrice).toFixed(2)}</td>
                    <td>{Number(convertedPrice).toFixed(2)}</td>
                    <td>Real Brasileiro</td>
                    <td>
                      <button>Editar</button>
                      <button
                        onClick={ () => this.removeClick(id) }
                        data-testid="delete-btn"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                );
              })
            }

          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
