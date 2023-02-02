import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCurrency } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(addCurrency());
  }

  render() {
    const { moedas } = this.props;
    return (
      <div>
        <div>

          <label htmlFor="valordes">
            Valor da Despesa:
            <input type="text" name="" id="valordes" data-testid="value-input" />
          </label>
          <label htmlFor="descricao">
            Descrição da Despesa:
            <input type="text" name="" id="descricao" data-testid="description-input" />
          </label>
          <label htmlFor="curr">
            Moeda:
            <select data-testid="currency-input" id="curr">
              { moedas.map((moeda) => (
                <option key={ moeda } value={ moeda }>{moeda}</option>
              )) }
            </select>
          </label>
          <label htmlFor="pagamento">
            Forma de pagamento:
            <select name="" id="pagamento" data-testid="method-input">
              <option value="">Dinheiro</option>
              <option value="">Cartão de crédito</option>
              <option value="">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="escolha" data-testid="tag-input">
            Escolha uma categoria:
            <select name="" id="escolha" data-testid="tag-input">
              <option value="">Alimentação</option>
              <option value="">Lazer</option>
              <option value="">Trabalho</option>
              <option value="">Transporte</option>
              <option value="">Saúde</option>
            </select>
          </label>
        </div>

      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  moedas: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
