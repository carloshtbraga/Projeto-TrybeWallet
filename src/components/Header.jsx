import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    total: 0,
  };

  componentDidUpdate(prevProps) {
    const { expenses } = this.props;
    if (prevProps.expenses !== expenses) {
      const total = expenses.reduce(
        (acc, { value, exchangeRates, currency }) => {
          const askValue = exchangeRates[currency].ask;
          return parseFloat(acc) + parseFloat(value) * askValue;
        },
        0,
      );

      this.setState({
        total: parseFloat(total),
      });
    }
  }

  render() {
    const { email } = this.props;
    const { total } = this.state;
    return (
      <div>
        <h3 data-testid="email-field">{email}</h3>
        <h5 data-testid="total-field">{total.toFixed(2)}</h5>
        <h5 data-testid="header-currency-field">BRL</h5>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }),
}.isRequired;

export default connect(mapStateToProps)(Header);
