import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCurrency, addExchangeRate } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    id: 0,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(addCurrency());
  }

  handleValue = ({ target: { value } }) => {
    this.setState({
      value,
    });
  };

  handleDescription = ({ target: { value } }) => {
    this.setState({
      description: value,
    });
  };

  handleCurrency = ({ target: { value } }) => {
    this.setState({
      currency: value,
    });
  };

  handleMethod = ({ target: { value } }) => {
    this.setState({
      method: value,
    });
  };

  handleTag = ({ target: { value } }) => {
    this.setState({
      tag: value,
    });
  };

  handleClick = () => {
    const { dispatch } = this.props;
    const { id } = this.state;
    dispatch(addExchangeRate(this.state));
    this.setState({
      id: id + 1,
      value: '',
      description: '',
    });
  };

  render() {
    const { moedas } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <div>

          <label htmlFor="valordes">
            Valor da Despesa:
            <input
              onChange={ this.handleValue }
              type="number"
              value={ value }
              name=""
              id="valordes"
              data-testid="value-input"
            />
          </label>
          <label htmlFor="descricao">
            Descrição da Despesa:
            <input
              onChange={ this.handleDescription }
              value={ description }
              type="text"
              name=""
              id="descricao"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="curr">
            Moeda:
            <select
              data-testid="currency-input"
              id="curr"
              value={ currency }
              onChange={ this.handleCurrency }
            >
              { moedas.map((moeda) => (
                <option
                  key={ moeda }
                  value={ moeda }
                >
                  {moeda}
                </option>
              )) }
            </select>
          </label>
          <label htmlFor="pagamento">
            Forma de pagamento:
            <select
              value={ method }
              name=""
              id="pagamento"
              data-testid="method-input"
              onChange={ this.handleMethod }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="escolha">
            Escolha uma categoria:
            <select
              value={ tag }
              name="tag"
              id="escolha"
              data-testid="tag-input"
              onChange={ this.handleTag }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </div>

      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  moedas: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
